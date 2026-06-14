import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home-p";
import About from "./About-p";
import P1 from "./p1";
import P2 from "./p2";
import Fruit from "./fruit";
import F2 from "./Filter";
import F3 from "./Reduce";
import F4 from "./Combine";
import SaveButton from "./onclick";
import LoginForm from "./onsubmit";
import SearchBox from "./onchange";

import "./App.css";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const moreItems = [
  { label: "P1", path: "/p1" },
  { label: "P2", path: "/p2" },
  { label: "Fruit", path: "/fruit" },
  { label: "Filter", path: "/filter" },
  { label: "Reduce", path: "/reduce" },
  { label: "Combine", path: "/combine" },
  { label: "OnClick", path: "/onclick" },
  { label: "Login Form", path: "/login" },
  { label: "Search Box", path: "/search" },
];

export default function MainR() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyApp</h2>

        <div className="navContainer">
          <ul className="navLinks">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link className="link" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dropdown Menu */}
          <div
            className="dropdownWrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="dropdownBtn">More</button>

            {dropdownOpen && (
              <ul className="dropdownMenu">
                {moreItems.map((item) => (
                  <li key={item.path} className="dropdownItem">
                    <Link
                      className="dropdownLink"
                      to={item.path}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/p1" element={<P1 name="Sara" />} />
        <Route path="/p2" element={<P2 name="John" />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/filter" element={<F2 />} />
        <Route path="/reduce" element={<F3 />} />
        <Route path="/combine" element={<F4 />} />
        <Route path="/onclick" element={<SaveButton />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/search" element={<SearchBox />} />
      </Routes>
    </Router>
  );
}
