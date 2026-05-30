import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Usi from "./usi";
import Product from "./product";
import img1 from "../assets/hero.png";
import img2 from "../assets/react.svg";
import img3 from "../assets/vite.svg";
import Us2 from "./us2";
import Us3 from "./us3";
import Ustask2 from "./ustask2";
import Ustask4 from "./ustask4";
import Us6 from "./us6";
import Us7 from "./us7";
import Us8 from "./us8";
import Ustask9 from "./ustask9";
import Ustask10 from "./ustask10";
import Usrstask3 from "./usrstask3";
import UR from "./ur";
import Urtask2 from "./urtask2";
import './MainR.css';

const obj1 = [
  { name: 'Mi', price: '20000', pic: img1 },
  { name: 'samsung', price: '25000', pic: img2 },
  { name: 'apple', price: '30000', pic: img3 }
];

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Product', path: '/product' },
];

const moreItems = [
  { label: 'Usi', path: '/usi' },
  { label: 'Us2', path: '/us2' },
  { label: 'Us3', path: '/us3' },
  { label: 'UsTask2', path: '/ustask2' },
  { label: 'UsTask4', path: '/ustask4' },
  { label: 'Us6', path: '/us6' },
  { label: 'Us7', path: '/us7' },
  { label: 'Us8', path: '/us8' },
  { label: 'UsTask9', path: '/ustask9' },
  { label: 'UsTask10', path: '/ustask10' },
  { label: 'Usrstask3', path: '/usrstask3' },
  { label: 'UR', path: '/ur' },
  { label: 'Urtask2', path: '/urtask2' }
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
            <button className="dropdownBtn">
              More ▼
            </button>
            
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product data={obj1} />} />
        <Route path="/usi" element={<Usi />} />
        <Route path="/us2" element={<Us2 />} />
        <Route path="/us3" element={<Us3 />} />
        <Route path="/ustask2" element={<Ustask2 />} />
        <Route path="/ustask4" element={<Ustask4 />} />
        <Route path="/us6" element={<Us6 />} />
        <Route path="/us7" element={<Us7 />} />
        <Route path="/us8" element={<Us8 />} />
        <Route path="/ustask9" element={<Ustask9 />} />
        <Route path="/ustask10" element={<Ustask10 />} />
        <Route path="/usrstask3" element={<Usrstask3 />} />
        <Route path="/ur" element={<UR />} />
        <Route path="/urtask2" element={<Urtask2 />} />
      </Routes>
    </Router>
  );
}