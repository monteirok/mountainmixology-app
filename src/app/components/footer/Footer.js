import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className={`${Styles.footerContainer}`}>
            <div className={`container`}>
                <a className='p-2 text-center fw-bold' href='https://www.instagram.com/mountain.mixology/' target='_blank' title='Instagram'>
                    <Image
                        className={`${Styles.instagramIcon}`}
                        src="/images/instagram.png"
                        width={27}
                        height={27}
                        alt="instagram icon"
                    />
                </a>
            <a className='p-2 text-center fw-bold' href='mailto:contact@mountainmixology.ca' title='Email Us'>
                <FontAwesomeIcon className={`${Styles.mailIcon}`} icon={faEnvelope} />
            </a>
            </div>            
        </footer>
    )
}

export default Footer