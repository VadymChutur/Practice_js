import transactionHistory from './trnsaction.js';
console.log(transactionHistory);

// <tr>
//   <td>ID транзакциї</td>
//   <td>Сума</td>
//   <td>Дата</td>
//   <td>Хто</td>
//   <td>Тип транзакції</td>
//   <td>Ім'я рахунку</td>
//   <td>Номер рахунку</td>
// </tr>;
const makeTransactionTableRowMarkup = ({
  id,
  amount,
  date,
  business,
  type,
  name,
  account,
}) => {
  return `
    <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
    </tr>`;
};

console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

// console.log(makeTransactionTableRows);
