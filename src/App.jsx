import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Edit from "./pages/Edit.jsx";
import Show from "./pages/Show.jsx";
import New from "./pages/New.jsx";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="transactions/new" element={<New />} />
            <Route path="transactions/:index" element={<Show />} />
            <Route path="transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
