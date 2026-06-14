import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home-p";
import About from "./About-p";

import "./App.css";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const moreItems = [
  //   { label: "Usi", path: "/usi" },
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
      </Routes>
    </Router>
  );
}
