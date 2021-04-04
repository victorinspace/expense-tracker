const expenseDateInput = () => document.getElementById("date").value;
const expenseAmountInput = () => document.getElementById("amount").value;
const expenseItemInput = () => document.getElementById("item").value;
const expenseCommentInput = () => document.getElementById("comment").value;

const addExpenseToTable = (date, amount, item, comment) => {
  const expenseTable = document.getElementById("expense-list");
  const dataRow = expenseTable.insertRow(0);

  dataRow.insertCell(0).innerHTML = date;
  dataRow.insertCell(1).innerHTML = `$${amount}`;
  dataRow.insertCell(2).innerHTML = item;
  dataRow.insertCell(3).innerHTML = comment;

  dataRow.insertCell(4).innerHTML = `
    <button id="remove-item" class="expense-table__remove-item">Remove</button>
  `;
};

const deleteRow = () => {
  const removeRowButton = document.getElementById("remove-item");
  removeRowButton.addEventListener("click", (e) => {
    e.preventDefault();
    const row = e.target.parentNode.parentNode.rowIndex;
    console.log(row);
    document.getElementById("expense-list").deleteRow(row);
  });
};

const submitExpense = (e) => {
  e.preventDefault();

  const date = expenseDateInput();
  const amount = expenseAmountInput();
  const item = expenseItemInput();
  const comment = expenseCommentInput();

  addExpenseToTable(date, amount, item, comment);

  deleteRow();
};

document
  .getElementById("expense-form")
  .addEventListener("submit", submitExpense);
