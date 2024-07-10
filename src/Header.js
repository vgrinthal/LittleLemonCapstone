import { NavLink } from "react-router-dom";
import "./App.css";

const Header = () => {
    return (
        <Header>
            <nav>
            <NavLink to="/">Navigation Bar</NavLink>
            <img src="./Logo.svg" alt="Little Lemon Logo">Little Lemon</img>
            <div id="nav-menu">
                <ul>
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/#about" className="about-link">About</NavLink></li>
                    <li><NavLink to="/menu" className="menu-link">Menu</NavLink></li>
                    <li><NavLink to="/reservations" className="reservations-link">Reservations</NavLink></li>
                    <li><NavLink to="/order-online" className="order-online-link">Order Online</NavLink></li>
                    <li><NavLink to="/login" className="login-link">Login</NavLink></li>
                </ul>
            </div>
            </nav>
        </Header>
    );
}

export default Header;