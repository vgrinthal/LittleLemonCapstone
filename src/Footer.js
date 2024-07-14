import { NavLink } from "react-router-dom";
import "./App.css";

export default function Footer() {
    return (
        <footer className="Footer">
            <div>
            <div className="footer-column">
            <img src="/icons_assets/Logo.svg" alt="Little Lemon Logo" />
            </div>
            <div className="footer-column">
            <nav>
                <b>Little Lemon</b>
                <ul>
                    <li><NavLink to="/" className="home-link">Home</NavLink></li>
                    <li><NavLink to="/#about" className="about-link">About</NavLink></li>
                    <li><NavLink to="/menu" className="menu-link">Menu</NavLink></li>
                    <li><NavLink to="/reservations" className="reservations-link">Reservations</NavLink></li>
                    <li><NavLink to="/order-online" className="order-online-link">Order Online</NavLink></li>
                    <li><NavLink to="/login" className="login-link">Login</NavLink></li>
                </ul>
            </nav>
            </div>
            <div className="footer-column">
                <b>Contact Us</b>
                <p>123 Sesame St., Chicago, IL, 12345<br />
                (123) 456-7890<br />
                contact@littlelemon.com</p>
            </div>
            <div className="footer-column">
                <b>Find Us On:</b>
                <ul>
                    <li><a href="https://www.facebook.com" alt="Facebook">Facebook</a></li>
                    <li><a href="https://www.x.com" alt="X">X</a></li>
                    <li><a href="https://www.instagram.com" alt="Instagram">Instagram</a></li>
                    <li><a href="https://www.tiktok.com" alt="TikTok">TikTok</a></li>
                    <li><a href="https://www.youtube.com" alt="YouTube">YouTube</a></li>
                </ul>
            </div>
            </div>
        </footer>
    );
}
