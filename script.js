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

const expenseAmountInput = () => {
  const inputAmount = document.getElementById("date").value;
  console.log(`Expense Amount: ${inputAmount}`);
};

const expenseDateInput = () => {
  const inputDate = document.getElementById("amount").value;
  console.log(`Expense Date: ${inputDate}`);
};

const submitExpense = (e) => {
  e.preventDefault();

  // === grab the date ===
  expenseDateInput();

  // === grab the amount ===
  expenseAmountInput();

  // === grab the item ===
  // === grab the comment (if there) ===
  // === append the added expense to the expense table ===
};

document
  .getElementById("expense-form")
  .addEventListener("submit", submitExpense);
