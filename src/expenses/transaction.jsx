import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction({ transactions, onAddTransaction, onDeleteTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAddTransaction(title, amount, type);
    setTitle('');
    setAmount('');
  };

  return (
    <Container className="transaction-details">
      <div className="transaction-head mt-6">
        <Row>
          <Col md={6}>
            <div className="transaction">
              <Form className="transaction-form" onSubmit={handleSubmit}>
                <h1 className="transaction-header">Add Transaction</h1>
                <Form.Group controlId="title">
                  <Form.Label>TITLE</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="TITLE"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="amount">
                  <Form.Label>AMOUNT</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="AMOUNT"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="select">
                  <Form.Label>TYPE</Form.Label>
                  <Form.Control
                    as="select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Income</option>
                    <option>Expenses</option>
                  </Form.Control>
                  <br />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Add
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td>Rs {transaction.amount.toFixed(2)}</td>
                        <td>{transaction.type}</td>
                        <td>
                          <Button variant="danger" onClick={() => onDeleteTransaction(transaction.id)}>
                            <FaTrashAlt />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
