import React from "react";
import "./styles/styles.css";

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html/">Menu</a></li>
                <li><a href="reservation.html/">Reservation</a></li>
                <li><a href="contact.html/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;