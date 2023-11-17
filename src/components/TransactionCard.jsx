import "../styles/transactionCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TransactionCard({ id, item_name, amount, date }) {
  return (
    <div className="transaction-card">
      <div className="transaction-info">
        {id}
        <div> {date} </div>
        <Link to="/details/:id" className="transaction-category">
          {item_name}{" "}
        </Link>
        <div> {item_name} </div>
        <div> {amount} </div>
      </div>
    </div>
  );
}

TransactionCard.propTypes = {
  id: PropTypes.number.isRequired,
  item_name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
