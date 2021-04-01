// TO-DO
// ==========
// Each expense should include:
// - The date of expense
// - A description of the expense
// - The amount
// - Where the purchases occurred (eg. McDonald’s)
// User should be able to add a new expense
// User should be able to delete expense
// User should be able to see all of the expenses in an HTML table

const addExpenseToTable = (date, amount, item, comment) => {
  const expenseTable = document.getElementById("expense-list");
  const dataRow = expenseTable.insertRow(0);

  dataRow.insertCell(0).innerHTML = date;
  dataRow.insertCell(1).innerHTML = amount;
  dataRow.insertCell(2).innerHTML = item;
  dataRow.insertCell(3).innerHTML = comment;

  dataRow.insertCell(4).innerHTML = `
    <button class="expense-table__remove-item">Remove</button>
  `;
};

const expenseCommentInput = () => document.getElementById("comment").value;
const expenseItemInput = () => document.getElementById("item").value;
const expenseAmountInput = () => document.getElementById("amount").value;
const expenseDateInput = () => document.getElementById("date").value;

const submitExpense = (e) => {
  e.preventDefault();

  const date = expenseDateInput();
  const amount = expenseAmountInput();
  const item = expenseItemInput();
  const comment = expenseCommentInput();

  addExpenseToTable(date, amount, item, comment);

  // --- The subtotal should change depending on the data rows
};

document
  .getElementById("expense-form")
  .addEventListener("submit", submitExpense);
