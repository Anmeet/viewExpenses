import filtersReducer from '../../reducers/filters';
import moment from 'moment';
test('should set up default filter values', () => {
    const state = filtersReducer(undefined,'@@INIT')
    expect(state).toEqual({
       text:"",
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month'),

    })
})

test('should set sortBy to amount', () => {
   const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'})
   expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to Date', () => {
    
    const currentState = {
   text: '',
   startDate: undefined,
   endDate:undefined,
   sortBy:'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState,action)
    expect(state.sortBy).toEqual('date')
 })

 //should set text filter

 test('should set text filter' , () => {
     const text = "This is my filter";
     const action = {
         type: 'SET_TEXT_FILTER',
         text
     }
     const state = filtersReducer(undefined,action)
     expect(state.text).toBe(text);
 })


 //should start date filter

 test('should set start Date filter' , () => {
    const startDate =  moment().startOf('month');
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.startDate).toEqual(startDate);
})


 //should endDate filter

 test('should set endDate filter' , () => {
    const endDate =  moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.endDate).toEqual(endDate);
})