import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test( 'should correctly render ExpensesSummary with 1 expenses' , () => {
   const wrapper = shallow(<ExpenseSummary expenseCount = {1} expensesTotal = {235} />)
   expect(wrapper).toMatchSnapshot();
})

test( 'should correctly render ExpensesSummary with multiple expenses' , () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {23} expensesTotal = {235025895} />)
    expect(wrapper).toMatchSnapshot();
})