import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHaandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHaandler}/>
    </div>
}

export default NewExpense;