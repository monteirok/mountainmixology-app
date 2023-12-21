import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={`${Styles.navbarContainer} navbar navbar-expand-md`}>
            <div className='container-fluid'>
                {/*
                    NAV BRAND/LOGO CONTAINER 
                                            */}
                <div className='navbar-brand'>
                    <Link href='/'>
                        <Image
                            src='/images/logo.png'
                            width={125}
                            height={75}
                            alt='Mountain Mixology logo'
                        />
                    </Link>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/*
                    NAV LINKS CONTAINER
                                        */}
                <div className={`${Styles.navLinksContainer} collapse navbar-collapse`} id='navbarNav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        {/* about us */}
                        <li className='nav-item'>
                            <Link className={`${Styles.navLink} nav-link fw-bold`} href='/about'>
                                About Us
                            </Link>
                        </li>
                        {/* our menu */}
                        <li className='nav-item'>
                            <Link className={`${Styles.navLink} nav-link fw-bold`} href='/menu'>
                                Our Menu
                            </Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        {/* reserve now */}
                        <li>
                            <Link className='p-2 text-center' href='mailto:reservations@mountainmixology.ca' title='Email Us'>
                                <button className={`${Styles.navButton} btn btn-primary fs-5 fw-bold`}>RESERVE</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
