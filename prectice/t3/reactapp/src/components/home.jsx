import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Incdec from "./incdec";
import Hi from "./hi";
import Hello from "./hello";

function Home() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/incdec">Incdec</Link>
            <br />
            <Link to="/hello">Hello</Link>
            <br />
            <Link to="/">HI</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/incdec" element={<Incdec />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/" element={<Hi />} />
      </Routes>
    </Router>
  );
}

export default Home;
