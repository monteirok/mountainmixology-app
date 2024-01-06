import React from 'react'
import Link from 'next/Link'
import Image from 'next/image'
import Logo from '../logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Navbar.module.css'
import Globals from '../../../app/globals.css'

const Navbar = () => {
    return (
        <nav className={`${Styles.navbarContainer} ${Styles.navFrostedGlass} navbar navbar-expand-sm`}>
            <div className='container-fluid'>
            {/*
                NAV BRAND/LOGO CONTAINER 
                                        */}
                <div className='navbar-brand'>
                    <Link href='/'>
                        <Image
                            className={`${Styles.navbarLogo} navbar-brand`}
                            src='/images/logo.png'
                            width={150}
                            height={95}
                            alt='Mountain Mixology logo'
                        />
                    </Link>
                </div>
            {/*
                NAV LINKS CONTAINER
                                    */}
                <div className={`${Styles.navLinksContainer}`}>
                    <ul className='navbar-nav me-auto'>
                    {/* our story */}
                        <li className='nav-item'>
                            <Link className={`${Styles.navLink} ${Styles.hoverUnderlineAnimation} nav-link fw-bold`} href='/our-story'>
                                OUR STORY
                            </Link>
                        </li>
                    {/* menu */}
                        <li className='nav-item'>
                            <Link className={`${Styles.navLink} ${Styles.hoverUnderlineAnimation} nav-link fw-bold`} href='/menu'>
                                MENU
                            </Link>
                        </li>
                    </ul>
                </div>
            {/*
                RESERVE BTN CONTAINER
                                        */}
                <div className={`${Styles.navReserveBtnContainer}`} id='navbarNav'>
                    <ul className='navbar-nav me-auto'>
                    {/* reserve now btn*/}
                        <li className='nav-item'>
                            <Link className={`${Styles.navLink} nav-link fw-bold p-2 a`} href='mailto:reservations@mountainmixology.ca' title='Email Us'>
                                <button className={`${Styles.navReserveBtn} btn btn-primary fs-5 fw-bold`}>RESERVE</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
