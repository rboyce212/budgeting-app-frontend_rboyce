import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const API = import.meta.env.VITE_BASE_URL;

export default function AddTransactionForm() {
  const navigate = useNavigate();
  const initialTransactionState = { date: "", item_name: "", amount: "" };
  const [transaction, setTransaction] = useState(initialTransactionState);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (flag) {
      fetch('http://localhost:3779', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      })
        .then(() => {
            setTransaction(initialTransactionState); // reset form
            setFlag(false);
            navigate("/");  // redirect or update
        })
        .catch((error) => {
            // handle error
            console.error('Error:', error);
            setFlag(false);
        });
    }
  }, [flag, navigate, transaction, initialTransactionState]);

  return (
    <div className="add-transaction-container">
      <h2 className="add-transaction-title">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Id Number: </label>
          <input
            name="id"
            value={transaction.id}
            onChange={handleChange}
            type="text"
            className="from-input"
            placeholder="unique id"
          />
          <label className="form-label">Date: </label>
          <input
            name="date"
            value={transaction.date}
            onChange={handleChange}
            type="text"
            className="from-input"
            placeholder="date"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Category: </label>
          <input
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
            type="text"
            className="from-input"
            placeholder="category"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Amount: </label>
          <input
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            type="text"
            className="from-input"
            placeholder="amount"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
