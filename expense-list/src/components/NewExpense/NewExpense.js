import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [formIsShown, setFormIsShown] = useState(false);

    const showFormHandler = () => {
        setFormIsShown(true);
    };

    const hideFormHandler = () => {
        setFormIsShown(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        hideFormHandler();
    }

    return <div className='new-expense'>
        { formIsShown ? <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onClose={hideFormHandler}
            /> : <button type='button' onClick={showFormHandler}>Add New Expense</button> }
    </div>
}

export default NewExpense;