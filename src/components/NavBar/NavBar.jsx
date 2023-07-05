/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";



const NavBar = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">
                {logo}
            </a>
        <input type="checkbox" className="side-menu" id="side-menu" />
        <label className="hamb" for="side-menu">
        <span className="hamb-line"></span>
        </label>
        <nav className="nav">
        <ul className="menu">
            <li>
            <a href="#">About</a>
            </li>
            <li>
            <a href="#">Products</a>
            </li>
            <li>
            <a href="#">Categories</a>
            </li>
            <li>
            <a href="#">Contact</a>
            </li>
            <li>
            <CartWidget />
            </li>
        </ul>
        </nav>
    </header>
    );
};


export default NavBar;
