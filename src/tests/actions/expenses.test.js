import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { configure } from 'enzyme';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {auth:{uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
   const expensesData = {};

   expenses.forEach(({id,description,note,amount,createdAt}) => {
     expensesData[id] = {description, note, amount, createdAt}
   } )
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})


test('Should setup remove expense action objects', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should remove expense from firebase', (done) => {
   const store = createMockStore(defaultAuthState);
   const id = expenses[2].id
   store.dispatch(startRemoveExpense({id})).then(() => {
     const actions = store.getActions();
     expect(actions[0]).toEqual ({
       type:"REMOVE_EXPENSE",
       id
     });
     return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
       expect(snapshot.val()).toBeFalsy();
       done();
     })
   })


})

test('should set up edit expense action objects', () => {
  const action = editExpense('123', { descritpion: 'It is an item' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      descritpion: 'It is an item',
    },
  });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {amount: 111}
    store.dispatch(startEditExpense(id, updates)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates

      })

      return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
          expect(snapshot.val().amount).toBe(updates.amount)
          done();
      })
    })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1000,
    createdAt: 1000,
    note: 'This is a note',
  };

  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore(defaultAuthState);

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is better',
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {

    const store = createMockStore(defaultAuthState);

    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
    };
  
    store
      .dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults,
          },
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type:'SET_EXPENSES',
      expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
   const store = createMockStore(defaultAuthState);
   store.dispatch(startSetExpenses()).then(() => {
     const actions = store.getActions();
     expect(actions[0]).toEqual({
       type: 'SET_EXPENSES',
       expenses
     })
     done();
   })
})