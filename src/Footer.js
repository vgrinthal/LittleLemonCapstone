import { NavLink } from "react-router-dom";
import "./App.css";

export default function Footer() {
    return (
        <footer className="Footer" color="#49SE57">
           <nav>
            <div id="nav-menu">
                <b>Little Lemon</b>
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
            <div id="contact-us">
                <b>Contact Us</b>
                <p>123 Sesame St., Chicago, IL, 12345<br />
                (123) 456-7890<br />
                contact@littlelemon.com</p>
            </div>
            <div id="social-links">
                <b>Find Us On:</b>
                <ul>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.x.com">X</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                    <li><a href="https://www.tiktok.com">TikTok</a></li>
                    <li><a href="https://www.youtube.com">YouTube</a></li>
                </ul>
            </div>
        </footer>
    );
}
