import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './Logo.module.css'

const CustomNavLogo = () => {
    return (
        <Link href='/'>
            <Image
                className={`${Styles.navLogo} ${Styles.whiteGlowNavLogo}`}
                src='/images/logos/logo.png'
                width={150}
                height={95}
                alt='Mountain Mixology logo'
            />
        </Link>
    )
}

export default CustomNavLogo
