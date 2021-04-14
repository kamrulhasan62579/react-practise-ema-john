import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Vission">Vission</a></li>
                    <li><a href="Features">Features</a></li>
                    <li><a href="/Dream">Dream</a></li>
                    <li><a href="/Contact Us">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;