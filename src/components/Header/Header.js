import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header>
                <nav className="nav">
                    <ul className="main-menu">
                        <li className="logo"><a href="/transfer-market">Transfer Market</a></li>
                        <li><a href="/transfer">Transfer &amp; Rumors</a></li>
                        <li><a href="/market">Market Value</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;