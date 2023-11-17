// import "../styles/TransactionList.css";
import { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";

const API = import.meta.env.VITE_BASE_URL;

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((resJSON) => setTransactions(resJSON))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-list">
      <div className="container-list">
        {transactions.map((transaction) => {
          <TransactionCard
            key={transaction.id}
            item_name={transaction.item_name}
            amount={transaction.amount}
            date={transaction.date}
          />;
        })}
      </div>
    </div>
  );
}
