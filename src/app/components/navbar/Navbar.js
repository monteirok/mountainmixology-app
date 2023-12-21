import React from 'react'
import Link from 'next/link'
import Logo from '../logo/Logo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${Styles.navbarContainer} navbar navbar-dark navbar-expand-sm px-5 py-3`} id="navBarHamburger">
            <div className='container-fluid'>
                {/* logo */}
                <Link href="https://mountainmixology.ca">
                    <Logo />
                </Link>
                {/* navbar toggler (hamburger menu) */}
                <button className={`${Styles.navbarHamburgerMenu} navbar-toggler`} id='navbarHamburger' type="button" data-bs-toggle="collapse" data-bs-target="#navBarHamburger" aria-controls="navBarHamburger" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* nav items (links) */}
                <div className='collapse navbar-collapse' id="navBarHamburger">
                    <ul className={`${Styles.navLinksContainer} navbar-nav ms-auto fw-bold`}>
                        {/* home */}
                        <li className="nav-item">
                            <Link className={`${Styles.navLink} nav-link`} href="/">
                                Home
                            </Link>
                        </li>
                        <div className={`${Styles.spacer}`}></div>
                        {/* about us */}
                        <li className="nav-item">
                            <Link className={`${Styles.navLink} nav-link`} href="/about-us">
                                About Us
                            </Link>
                        </li>
                        {/* login */}
                        <li className="nav-item">
                            <Link className={`${Styles.navLink} nav-link`} href="/login">
                                <button className='btn btn-primary fs-5 fw-bold'>Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
