import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';


export class EditExpensePage extends React.Component {

    onSubmit = (expense) =>
                 
    {
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
        console.log('Submitted', expense)}

    onRemove = () => {
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
            <ExpenseForm 
              expense = {this.props.expense}
            onSubmit = {this.onSubmit} />
        
                    <button onClick = { this.onRemove}>Remove</button>
                
          
            </div>
        )
    }
}





const mapDispatchToProps = (dispatch,props) => {
    return {
        editExpense : (id, expense) => dispatch(editExpense(id,expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    }
}


const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => {
           return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (EditExpensePage);