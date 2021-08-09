import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 8, 9);
  const expenseTitle = 'Auto';
  const expenseAmount = 50000;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;