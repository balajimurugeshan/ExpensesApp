import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Detail from "./detail.jsx";
import Transaction from "./transaction.jsx";

export default function Parent() {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [transactions, setTransactions] = useState([]);
  
    const handleAddTransaction = (title, amount, type) => {
      const amt = parseFloat(amount);
      const newTransaction = { id: transactions.length + 1, title, amount: amt, type };
      setTransactions([...transactions, newTransaction]);
  
      if (type === 'Income') {
        setIncome(income + amt);
        setBalance(balance + amt);
      } else if (type === 'Expenses') {
        setExpenses(expenses + amt);
        setBalance(balance - amt);
      }
    };
  
    const handleDeleteTransaction = (id) => {
      const transactionToDelete = transactions.find((t) => t.id === id);
      if (transactionToDelete.type === 'Income') {
        setIncome(income - transactionToDelete.amount);
        setBalance(balance - transactionToDelete.amount);
      } else if (transactionToDelete.type === 'Expenses') {
        setExpenses(expenses - transactionToDelete.amount);
        setBalance(balance + transactionToDelete.amount);
      }
      setTransactions(transactions.filter((t) => t.id !== id));
    };
  
    return (
      <Container>
        <Detail balance={balance} income={income} expenses={expenses} />
        <Transaction transactions={transactions} onAddTransaction={handleAddTransaction} onDeleteTransaction={handleDeleteTransaction} />
      </Container>
    );
  }