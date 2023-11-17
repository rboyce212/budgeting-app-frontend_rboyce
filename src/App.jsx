import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Details from "./pages/Details";
import List from "./pages/List";
import AddInfo from "./pages/AddInfo";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<AddInfo />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
