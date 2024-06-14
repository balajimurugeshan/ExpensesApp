import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img1 from './images/balance-image.png';
import img2 from './images/income-image.png';
import img3 from './images/expenses-image.png';

export default function Detail({ balance = 0, income = 0, expenses = 0 }) {
  return (
    <Container>
      <Row className="details-container">
        <Col md={4} className="balance-container">
          <Image src={img1} alt="bal" fluid />
          <div className="balance-text">
            <p>Your Balance</p>
            <p className="balance-amt">Rs {balance.toFixed(0)}</p>
          </div>
        </Col>
        <Col md={4} className="income-container">
          <Image src={img2} alt="Inc" fluid />
          <div className="income-text">
            <p>Your Income</p>
            <p className="income-amt">Rs {income.toFixed(0)}</p>
          </div>
        </Col>
        <Col md={4} className="expenses-container">
          <Image src={img3} alt="Exp" fluid />
          <div className="expenses-text">
            <p>Your Expenses</p>
            <p className="expenses-amt">Rs {expenses.toFixed(0)}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
