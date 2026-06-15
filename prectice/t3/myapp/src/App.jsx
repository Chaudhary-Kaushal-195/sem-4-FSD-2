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
import DeleteItem from "./ondoubleclick";
import HelpText from "./onmousehover";
import InputFocus from "./onfocus";
import Notification from "./pa1";
import Map1 from "./map1";
import Hook3 from "./pb-323";
import Hook4 from "./pb-325";
import Example from "./pb-337";
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
  { label: "Delete Item", path: "/delete" },
  { label: "Help Text", path: "/help" },
  { label: "Input Focus", path: "/focus" },
  { label: "Notification", path: "/notification" },
  { label: "Map1", path: "/map1" },
  { label: "Hook3", path: "/hook3" },
  { label: "Hook4", path: "/hook4" },
  { label: "Example", path: "/example" },
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
        <Route path="/delete" element={<DeleteItem />} />
        <Route path="/help" element={<HelpText />} />
        <Route path="/focus" element={<InputFocus />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/map1" element={<Map1 />} />
        <Route path="/hook3" element={<Hook3 />} />
        <Route path="/hook4" element={<Hook4 />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
}
