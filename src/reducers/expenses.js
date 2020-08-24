// //Expenses Reducer

// const expensesReducerDefaultState = [];
// const expenseReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [...state, action.expense];

//     case 'REMOVE_EXPENSE':
//       //return state.filter((expense) => expense.id !== action.id )
//       //Array destructuring
//       return state.filter(({ id }) => id !== action.id);
//     //return state.filter((expense) => {return (expense.id !== action.id)})

//     case 'EDIT_EXPENSE':
//       return state.map(expense => {
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates,
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// export default expenseReducer;


// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state;
  }
};