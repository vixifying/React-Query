/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/jewelery">Jewelery</Link>
        <Link to="/category/men's clothing">Men's clothing</Link>
        <Link to="/category/women's clothing">Women's clothing</Link>
      </nav>
    </header>
  );
};

export default Header;
