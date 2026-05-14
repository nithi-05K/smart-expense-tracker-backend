import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaWallet,
  FaArrowCircleUp,
  FaArrowCircleDown,
} from "react-icons/fa";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const [expenses, setExpenses] = useState([]);

  const income = expenses
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const expenseTotal = expenses
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + Number(item.amount), 0);

  const balance = income - expenseTotal;

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(
       https://smart-expense-tracker-api-4yqz.onrender.com/api/expenses
      );

      setExpenses(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    try {

      if (!title || !amount) {
        alert("Please fill all fields");
        return;
      }

      await axios.post(
        https://smart-expense-tracker-api-4yqz.onrender.com/api/expenses/add
        {
          title,
          amount,
          type,
        }
      );

      setTitle("");
      setAmount("");

      fetchExpenses();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(
      https://smart-expense-tracker-api-4yqz.onrender.com/api/expenses/${id}`
      );

      fetchExpenses();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative overflow-hidden">

      {/* Floating Animation */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-20 rounded-full blur-3xl animate-bounce pointer-events-none"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          Smart Expense Tracker
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Balance */}
          <div className="bg-white shadow-xl rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-4">
              <FaWallet className="text-3xl text-blue-500" />

              <h2 className="text-2xl font-bold">
                Balance
              </h2>
            </div>

            <p className="text-4xl font-semibold">
              ₹{balance}
            </p>

          </div>

          {/* Income */}
          <div className="bg-green-500 text-white shadow-xl rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-4">
              <FaArrowCircleUp className="text-3xl" />

              <h2 className="text-2xl font-bold">
                Income
              </h2>
            </div>

            <p className="text-4xl font-semibold">
              ₹{income}
            </p>

          </div>

          {/* Expense */}
          <div className="bg-red-500 text-white shadow-xl rounded-2xl p-8">

            <div className="flex items-center gap-3 mb-4">
              <FaArrowCircleDown className="text-3xl" />

              <h2 className="text-2xl font-bold">
                Expense
              </h2>
            </div>

            <p className="text-4xl font-semibold">
              ₹{expenseTotal}
            </p>

          </div>

        </div>

        {/* Add Expense */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Add Expense
          </h2>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Expense Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl flex-1 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl flex-1 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl outline-none"
            >
              <option value="income">income</option>
              <option value="expense">expense</option>
            </select>

            <button
              onClick={addExpense}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Add
            </button>

          </div>
        </div>

        {/* Expense List */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Expense List
          </h2>

          <div className="grid gap-5">

            {expenses.map((expense) => (
              <div
                key={expense._id}
                className="bg-white shadow-xl rounded-2xl p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    {expense.title}
                  </h3>

                  <p className="text-lg mt-2">
                    ₹{expense.amount}
                  </p>

                  <p className="capitalize text-gray-600 mt-1">
                    {expense.type}
                  </p>
                </div>

                <button
                  onClick={() => deleteExpense(expense._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold transition duration-300"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;