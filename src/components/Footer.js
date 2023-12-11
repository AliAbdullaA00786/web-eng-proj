import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/styles.css';

function Footer()
{
    return (
        <nav className="navBottom">
            <ul>
                <li> <Link to="/about">About Us</Link></li>
                <li> <Link to="/contact">Contact Us</Link></li>
                <li> <Link to="/conditions">Terms and Conditions</Link></li>
                <li> <Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </nav>
    );
}

export default Footer;