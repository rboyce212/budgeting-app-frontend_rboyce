import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="transaction-title">
        Budgter{" "}
      </Link>
      <button className="navbar-button">
        <Link to="/add" className="navbar-new-transaction">
          Add
        </Link>
      </button>
    </nav>
  );
}
