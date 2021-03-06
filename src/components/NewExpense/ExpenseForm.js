import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // ---different alternativ
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // ---different alternativ
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput ((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value}
    // })

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // ---different alternativ
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // ---different alternativ
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>

      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>Název</label>
          <input 
            type='text' 
            value={enteredTitle} 
            onChange={titleChangeHandler}/>
        </div>

        <div className='new-expense__control'>
          <label>Cena</label>
          <input 
            type='number' 
            value={enteredAmount} 
            min='0.10' 
            step='0.10' 
            onChange={amountChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Datum</label>
          <input 
            type='date' 
            value={enteredDate} 
            min='2019-01-01' 
            onChange={dateChangeHandler}/>
        </div>

      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Zrušit</button>
        <button type='submit'>Přidat položku</button>
      </div>

    </form>
  );
};

export default ExpenseForm;