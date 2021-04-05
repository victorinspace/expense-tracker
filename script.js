const expenseDateInput = () => document.getElementById("date").value;
const expenseAmountInput = () => document.getElementById("amount").value;
const expenseItemInput = () => document.getElementById("item").value;
const expenseCommentInput = () => document.getElementById("comment").value;
// const expenseDataArray = [{}];

const addExpenseToTable = (date, amount, item, comment) => {
  const expenseTable = document.getElementById("expense-list");
  const dataRow = expenseTable.insertRow(0);

  dataRow.insertCell(0).textContent = date;
  dataRow.insertCell(1).textContent = `$${amount}`;
  dataRow.insertCell(2).textContent = item;
  dataRow.insertCell(3).textContent = comment;

  dataRow.insertCell(4).innerHTML = `
    <button id="remove-item" class="expense-table__remove-item">Remove</button>
  `;
};

const deleteRow = () => {
  const removeRowButton = document.getElementById("remove-item");

  removeRowButton.addEventListener("click", (e) => {
    e.preventDefault();
    const row = e.target.parentNode.parentNode.rowIndex - 1;
    document.getElementById("expense-list").deleteRow(row);
  });
};

const submitExpense = (e) => {
  e.preventDefault();

  const date = expenseDateInput();
  const amount = expenseAmountInput();
  const item = expenseItemInput();
  const comment = expenseCommentInput();

  // expenseDataArray.push({
  //   date: date,
  //   amount: amount,
  //   item: item,
  //   comment: comment,
  // });

  console.log(this);

  addExpenseToTable(date, amount, item, comment);

  deleteRow();
};

document
  .getElementById("expense-form")
  .addEventListener("submit", submitExpense);
