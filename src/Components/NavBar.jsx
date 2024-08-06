import React from 'react';
import TopBar from './TopBar';
import logo from '../Images/nav-logo.png';
import NavContent from './NavContent';
import NavOverlay from './NavOverlay';

function NavBar() {

    const HandleNavOpen = () => {

        let overlayMain = document.querySelector('.nav-overlay-main');
        let overlayContent = document.querySelector('.overlay-content');
        let overlayBtn = document.querySelector('.overlay-close-btn');

        overlayContent.classList.add('active');
        overlayBtn.classList.add('active');
        overlayContent.classList.remove('hidden');
        overlayBtn.classList.remove('hidden');
        overlayMain.style.width = '240px';

    }

    return (
        <header className='header-main'>
            <TopBar />
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand d-block d-lg-none" href="/"><img src={logo} alt='logo' width={130} /></a>
                    <a href="/" className='navbar-brand nav-brnad-1'>
                        <i className="bi bi-map"><span>Destinaions</span></i>
                    </a>
                    <button className="nav-open-btn d-block d-lg-none" onClick={HandleNavOpen} type="button"> MENU
                    <i className="bi bi-text-right"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavContent />
                    </div>
                </div>
            </nav>
            <NavOverlay />
        </header>
    )
}

export default NavBar;