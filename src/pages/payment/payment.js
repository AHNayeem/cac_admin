import React, { useState } from 'react';

// Sample initial payment data
const initialPayments = [
  { id: 1, date: '2024-10-15', amount: 50, method: 'Credit Card', status: 'Completed' },
  { id: 2, date: '2024-10-16', amount: 20, method: 'PayPal', status: 'Pending' },
];

const Payment = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [newPayment, setNewPayment] = useState({ amount: '', method: '' });

  // Handle form input changes
  const handleChange = (e) => {
    setNewPayment({
      ...newPayment,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submitting a new payment
  const handleSubmitPayment = () => {
    const newPaymentEntry = {
      id: payments.length + 1,
      date: new Date().toISOString().slice(0, 10),
      amount: parseFloat(newPayment.amount),
      method: newPayment.method,
      status: 'Pending',
    };
    setPayments([newPaymentEntry, ...payments]);
    setNewPayment({ amount: '', method: '' });
  };

  return (
    <div className="payment-container">
      <h2>Payment Management</h2>

      {/* New Payment Form */}
      <div className="form-group">
        <h3>New Payment</h3>
        <input
          type="number"
          name="amount"
          value={newPayment.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <select
          name="method"
          value={newPayment.method}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
        <button onClick={handleSubmitPayment} disabled={!newPayment.amount || !newPayment.method}>
          Submit Payment
        </button>
      </div>

      {/* Payment History List */}
      <div className="payment-history">
        <h3>Payment History</h3>
        {payments.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td>{payment.date}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.method}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No payment history available.</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
