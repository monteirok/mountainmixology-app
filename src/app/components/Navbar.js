import React from 'react'
import Link from 'next/link'
import Logo from '../components/NavbarLogo'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles.navContainer} navbar`}>
            <div className='container-fluid p-1'>
                <div className="container-fluid row p-2 align-items-center">
                    {/* logo */}
                    <Link className="col" href="/">
                        <Logo />
                    </Link>
                    {/* nav links (right-side) */}
                    <div className='col'>
                        <ul className='navbar-nav text-end'>
                            <li className='nav-item'>
                                <Link className={`${styles.navLink} nav-link`} href="/">
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`${styles.navLink} nav-link`} href="/about-us">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
