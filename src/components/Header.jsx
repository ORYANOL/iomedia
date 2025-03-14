import React from 'react';
import reactlogo from '../assets/react.svg';
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
    return (
        <div className='header'>
            <div className="header-left">
                <h1>IO Media</h1>
                <img src={reactlogo} className='logoHead' alt="logo" />
            </div>

            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? (
                    <span className="material-symbols-outlined dark-icon">dark_mode</span>
                ) : (
                    <span className="material-symbols-outlined light-icon">light_mode</span>
                )}
            </button>
        </div>
    );
}

export default Header;