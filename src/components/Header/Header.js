import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <nav className="nav-bar-main">
        <ul>
            <li>
                <NavLink to="/" exact activeStyle={{ color: '#9E4770' }} >home</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeStyle={{ color: '#9E4770' }} >contact list</NavLink>
            </li>
            <li>
            <NavLink to="/statistic" activeStyle={{ color: '#9E4770' }} >Market Graph</NavLink>
            </li>
        </ul>
        </nav>
    );
};

export default Header;
