import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage';



let editExpense,removeExpense, history, wrapper;

beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn()
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage
          removeExpense = {removeExpense}
           editExpense = {editExpense} 
           history ={history}
            expense ={expenses[2]}
            />)
})

test('should render EditExpensePage correctly', () => {
 
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect (removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id})
})

