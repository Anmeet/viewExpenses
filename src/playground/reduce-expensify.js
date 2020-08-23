import { createStore, combineReducers } from 'redux';



//Actions




const demoState = {
  expenses: [
    {
      id: 'poijadfdsf',
      description: 'January Rent',
      note: 'This was the final rent of that address',
      amount: 54585,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};


//Filter reducer

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};



//store creation



store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 300, createdAt:-21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Cofee', amount: 100,createdAt:-1000 })
);

//store.dispatch(setTextFilter("ent"));
// store.dispatch(setTextFilter());

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}))

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//  store.dispatch(setEndDate(200));
// store.dispatch(setEndDate())
