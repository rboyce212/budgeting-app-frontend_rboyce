// import "../styles/TransactionList.css";
import { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`${API}/transactions`)
          .then((res) => res.json())
          .then((res) => {
            setTransactions(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-transactions">
      <div className="container-list">
        <table>
          <thead>
            <tr>
              <th>Date: </th>
              <th>ID #: </th>
              <th>Name: </th>
              <th>From: </th>
              <th>Amount: </th>
              <th>Category: </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => {
              <tr key={item.id}>
                <td>
                  <Link to={`/transactions/${item.id}`}>{item.date}</Link>
                </td>
                <td>{item.id}</td>
                <td>{item.item_name}</td>
                <td>{item.from}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
