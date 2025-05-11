import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo */}
                <h1 id="logo">
                    <a href="https://github.com/CommunityPro/portfolio-html">
                        <img src="./assets/logo.png" alt="Your Logo" />
                    </a>
                </h1>
                {/* Navbar links */}
                <ul className="nav-menu">
                    <li><a className="nav-link" href="/projects">PROJECTS</a></li>
                    <li><a className="nav-link" href="#">CONTACT</a></li>
                    <li><a className="nav-link" href="/Sobre">ABOUT ME</a></li>
                    <li>
                        <a className="nav-link btn btn-primary" href="https://github.com/CommunityPro/portfolio-html">
                            RESUME <i className="fas fa-arrow-right"></i>
                        </a>
                    </li>

                    {/* Toggle switch */}
                    <div className="theme-switch">
                        <input type="checkbox" id="switch" />
                        <label className="toggle-icons" htmlFor="switch">
                            <img className="moon" src="assets/moon.svg" alt="moon" />
                            <img className="sun" src="assets/sun.svg" alt="sun" />
                        </label>
                    </div>
                    {/* Hamburger menu */}
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
