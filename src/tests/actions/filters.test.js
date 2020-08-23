import {setStartDate, setEndDate, sortByDate, setTextFilter, sortByAmount}  from '../../actions/filters';
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)

    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should test sort by Date', () => {
    const action = sortByDate();
    expect(action).toEqual(
        {
            type: "SORT_BY_DATE"
        }
    )
})

test('Should test sort Amount', () => {
    const action = sortByAmount();
    expect(action).toEqual(
        {
            type: "SORT_BY_AMOUNT"
        }
    )
})

test('should generate set text filter object with text value', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })
})

test('should generate set text filter object with value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})