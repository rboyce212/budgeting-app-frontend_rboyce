import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/transactions" className="transaction-title">
          Budget App{" "}
        </Link>
        <button className="navbar-button">
          <Link to="/add" className="navbar-new-transaction">
            Add
          </Link>
        </button>
      </nav>
    </header>
  );
}
