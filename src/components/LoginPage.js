import React from 'react'
import {connect} from 'react-redux';
import {startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => {
    return (
        <div className = 'box-layout' >
        <div className = 'box-layout__box'>
        <h1 className = 'box-layout__title'> View Expenses</h1>
        <p>See your spending and Have it under control</p>
        <button className = 'button' onClick = {startLogin}>Login With Google</button>
        </div>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps) (LoginPage);
