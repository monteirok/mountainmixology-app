import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={`${Styles.footerContainer}`}>
            <div className={`container`}>
                {/* instagram icon */}
                <Link className={`${Styles.footerLink} text-center fw-bold`} href='https://www.instagram.com/mountain.mixology/' target='_blank'>
                    <Image
                        className={`${Styles.instagramIcon}`}
                        src="/images/icons/instagram-icon.png"
                        width={27}
                        height={27}
                        alt="instagram icon"
                    />
                </Link>
                {/* email icon */}
                <Link className={`${Styles.footerLink} text-center fw-bold`} href='mailto:reservations@mountainmixology.ca' title='Email Us'>
                    <FontAwesomeIcon className={`${Styles.mailIcon}`} icon={faEnvelope} />
                </Link>
            </div>            
        </footer>
    )
}

export default Footer