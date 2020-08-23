import { createStore } from 'redux';

//Action generators= function that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const reset = () => {
    return {
        type: 'RESET'
    }
}

const setCount = ({count}) => {
    return {
        type: 'SET',
        count
    }
}

//Reducers
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
     
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
     
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
      case 'SET':
          return {
              count: action.count
          }
    default:
      return state;
  }
}

const store = createStore(countReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(decrementCount());

store.dispatch(reset());
store.dispatch(setCount({count : 105}));
