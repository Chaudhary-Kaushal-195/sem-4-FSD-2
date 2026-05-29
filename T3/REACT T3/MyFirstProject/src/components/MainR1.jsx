import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import img1 from "../assets/hero.png";
import img2 from "../assets/react.svg";
import img3 from "../assets/vite.svg";
import Product from "./product";


const obj1 = [
  { name: 'Mi', price: '20000', pic: img1 },
  { name: 'samsung', price: '25000', pic: img2 },
  { name: 'apple', price: '30000', pic: img3 }
];

export default function MainR1() {
  return (
    <Router>
    <ul>
          <li>
            <Link to="/product">
              product
            </Link>
          </li>
    </ul>
          
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome Home</h1>} />
        <Route path="product" element={<Product data={obj1} />} />
      </Routes>
    </Router>
  );
}

