import { useState, useMemo } from "react";
import { Transaction } from "../interfaces/ExpenseTrackerDashboard";

const ExpenseTrackerDashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAdd = () => {
    if (!description || !amount || isNaN(amount)) return;
    const newTransaction = {
      id: Date.now(),
      description,
      amount,
    };
    setTransactions([newTransaction, ...transactions]);
    setDescription("");
    setAmount(0);
  };

  const total = useMemo(
    () =>
      transactions.reduce((res, transaction) => res + transaction.amount, 0),
    [transactions]
  );
  return (
    <div>
      <h1>Expense Tracker</h1>

      <div>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expense Amt"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <button onClick={handleAdd}>Add Transaction</button>
      </div>

      <div>
        <h2>Total: ${total}</h2>
      </div>

      <ul>
        {transactions.map((transaction) => {
          return (
            <li>
              <span>{transaction.description}</span>
              <span>
                {transaction.amount < 0 ? "-" : "+"} $
                {Math.abs(transaction.amount).toFixed(2)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ExpenseTrackerDashboard;
