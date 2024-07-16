import { NavLink } from "react-router-dom";
import "./App.css";

export default function Header() {
    return (
        <header className="Header">
            <meta name="description" content="Website for the Little Lemon restaraunt franchise based in Chicago, IL."></meta>
            <meta name="og:title" content="Little Lemon Restaraunt"></meta>
            <nav className="nav-menu">
            <div id="menu">
                <img id="logo" src="/icons_assets/Logo.svg" alt="Little Lemon Logo" />
                <ul>
                    <li className="nav-link"><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li className="nav-link"><NavLink to="/#about" className="about-link">About</NavLink></li>
                    <li className="nav-link"><NavLink to="/menu" className="menu-link">Menu</NavLink></li>
                    <li className="nav-link"><NavLink to="/reservations" className="reservations-link">Reservations</NavLink></li>
                    <li className="nav-link"><NavLink to="/order-online" className="order-online-link">Order Online</NavLink></li>
                    <li className="nav-link"><NavLink to="/login" className="login-link">Login</NavLink></li>
                </ul>
                <img id="icon" src="/icons_assets/hamburger.svg" alt="collapse-menu"/>
            </div>
            </nav>
        </header>
    );
}
