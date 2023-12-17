import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={`${Styles.footerContainer}`}>
            <h4 className='text-center fw-bold fst-italic'>COMING SOON!</h4>
        </footer>
    )
}

export default Footer