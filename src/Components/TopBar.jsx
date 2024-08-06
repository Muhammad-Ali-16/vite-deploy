import React from 'react'

function TopBar() {
    return (
        <nav className='topbar-main d-none d-lg-block'>
            <div className='container-fluid'>
                <div className='topbar-content'>
                    <ul className='topbar-list'>
                        <li className='topbar-item'>
                            <a href='/' className='topbar-link'>
                                <i className="bi bi-telephone-fill"></i> +123 45677 789
                            </a>
                        </li>
                        <li className='topbar-item'>
                            <a href='/' className='topbar-link'>
                                <i className="bi bi-envelope"></i> wanderland@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='topbar-content'>
                    <div className="topbar-social-icons topbar-list">
                        <h6>Socials</h6>
                        <a href='/' className='topbar-link'><i className="bi bi-instagram"></i></a>
                        <a href='/' className='topbar-link'><i className="bi bi-facebook"></i></a>
                        <a href='/' className='topbar-link'><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;