import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  // ✅ Render Backend API
  const API_URL =
    "https://smart-expense-tracker-api-4yqz.onrender.com/api/expenses";

  // Fetch Expenses
  const fetchExpenses = async () => {
    try {
      const res = await axios.get(API_URL);
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Add Expense
  const addExpense = async () => {
    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(`${API_URL}/add`, {
        title,
        amount,
        type,
      });

      setTitle("");
      setAmount("");

      fetchExpenses();
    } catch (error) {
      console.log(error);
      alert("Failed to add expense");
    }
  };

  // Delete Expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  // Calculations
  const income = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expense = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expense;

  return (
    <div className="app">
      <h1>Smart Expense Tracker</h1>

      <div className="cards">
        <div className="card balance">
          <h2>Balance</h2>
          <p>₹{balance}</p>
        </div>

        <div className="card income">
          <h2>Income</h2>
          <p>₹{income}</p>
        </div>

        <div className="card expense">
          <h2>Expense</h2>
          <p>₹{expense}</p>
        </div>
      </div>

      <div className="form-container">
        <h2>Add Expense</h2>

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>

        <button onClick={addExpense}>Add</button>
      </div>

      <div className="expense-list">
        <h2>Expense List</h2>

        {expenses.map((item) => (
          <div key={item._id} className="expense-item">
            <div>
              <h3>{item.title}</h3>
              <p>
                ₹{item.amount} - {item.type}
              </p>
            </div>

            <button onClick={() => deleteExpense(item._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;