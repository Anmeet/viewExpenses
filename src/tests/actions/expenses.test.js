import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should setup remove expense action objects' ,() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'

    })
})

test('should set up edit expense action objects', () => {
    const action = editExpense('123', {descritpion:"It is an item"});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:'123',
        updates: {
        descritpion:'It is an item'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        createdAt: 1000,
        note:'This is a note'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
  
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            
            id: expect.any(String),
            description: '',
            amount:0 ,
            createdAt: 0,
            note:''
        }
    })

})