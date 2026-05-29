import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Usi from "./usi";



export default function MainR2() {
  return (
    <Router>
    <ul>
          <li>
            <Link to="/usi">
              Usi
            </Link>
          </li>
    </ul>
          
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome Home</h1>} />
        <Route path="/usi" element={<Usi />} />
      </Routes>
    </Router>
  );
}

