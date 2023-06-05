import React from "react";
import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense=(props) =>{

    const SaveExpenseDateHandler=(enteredExpenseDate) =>{

        const expenseData={
            ...enteredExpenseDate,
            id:Math.random().toString()

        }
        props.onAddExpense(expenseData);
        console.log(expenseData)

    };

    return (
        <div className="new-expense">

            <ExpenseForm onSaveExpenseData={SaveExpenseDateHandler}/>

        </div>

    );



}

export default NewExpense;