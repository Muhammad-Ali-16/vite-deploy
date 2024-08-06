import React from 'react';
import logo from '../Images/nav-logo.png';

function NavContent() {
    return (
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a> 
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Blog</a>
            </li>
            <a href="/" className='navbar-brand d-none d-lg-block mx-5'>
                <img src={logo} alt='logo' width={150} /></a>
            <li className="nav-item">
                <a className="nav-link" href="/">Shop</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link-sm" href="/">Get in Toch</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">FAQ</a>
            </li>
        </ul>
    )
}

export default NavContent;