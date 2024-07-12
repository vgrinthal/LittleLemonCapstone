import { NavLink } from "react-router-dom";
import "./App.css";

export default function Header() {
    return (
        <header className="Header">
            <meta name="description" content="Website for the Little Lemon restaraunt franchise based in Chicago, IL."></meta>
            <meta name="og:title" content="Little Lemon Restaraunt"></meta>
            <nav className="nav-menu">
            <div>
                <img src="/icons_assets/Logo.svg" alt="Little Lemon Logo" />
                <ul>
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/#about" className="about-link">About</NavLink></li>
                    <li><NavLink to="/menu" className="menu-link">Menu</NavLink></li>
                    <li><NavLink to="/reservations" className="reservations-link">Reservations</NavLink></li>
                    <li><NavLink to="/order-online" className="order-online-link">Order Online</NavLink></li>
                    <li><NavLink to="/login" className="login-link">Login</NavLink></li>
                </ul>
                <img src="/icons_assets/hamburger.svg" alt="collapse-menu"/>
            </div>
            </nav>
        </header>
    );
}
