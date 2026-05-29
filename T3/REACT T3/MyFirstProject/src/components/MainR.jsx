import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
const obj1 = [
  { name: 'Mi', price: '20000', pic: img1 },
  { name: 'samsung', price: '25000', pic: img2 },
  { name: 'apple', price: '30000', pic: img3 }
];


export default function MainR() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyApp</h2>

        <ul style={styles.navLinks}>
          <li>
            <Link style={styles.link} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link style={styles.link} to="/about">
              About
            </Link>
          </li>

          <li>
            <Link style={styles.link} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/product">
              Product
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/usi">
              Usi
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/us2">
              Us2
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/us3">
              Us3
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/ustask2">
              UsTask2
            </Link>
          </li>
          <li>
            <Link style={styles.link} to="/ustask4">
              UsTask4
            </Link>
          </li>
        </ul>
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
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: "15px 40px",
  },

  logo: {
    color: "white",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};