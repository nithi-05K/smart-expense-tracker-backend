const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
    try {
        const { title, amount, type } = req.body;

        const expense = await Expense.create({
            title,
            amount,
            type,
        });

        res.status(201).json({
            message: "Expense added successfully",
            expense,
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
        });
    }
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();

        res.status(200).json(expenses);

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
        });
    }
};

const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found",
            });
        }

        res.status(200).json({
            message: "Expense deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    addExpense,
    getExpenses,
    deleteExpense,
};
