import React from 'react'
import Image from 'next/image'
import Styles from './Logo.module.css'

const LargeLogo = () => {
    return (
        <Image
            className={Styles.largeLogo}
            src="/images/logo.png"
            width={500}
            height={313}
            alt="larger version of the logo"
        />
    )
}

export default LargeLogo