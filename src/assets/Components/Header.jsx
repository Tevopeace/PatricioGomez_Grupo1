import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (event) => {
        event.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header>
            <div className="logo">
                <img src="/Egames.png" alt="Logo" />
            </div>
            <nav>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/" className="cta-button">Inicio</a></li>
                    <li><a href="/" className="cta-button">Servicio</a></li>
                    <li className="dropdown">
                        <a href="/" className="cta-button" onClick={toggleDropdown}>Menú</a>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <li><a href="/">apartado 1</a></li>
                            <li><a href="/">apartado 2</a></li>
                            <li><a href="/">apartado 3</a></li>
                            <li><a href="/">apartado 4</a></li>
                        </ul>
                    </li>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
            </nav>
        </header>
    );
};

export default Header;
