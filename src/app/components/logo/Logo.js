import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <Image
            src="/images/logo.png"
            width={175}
            height={95}
            alt="logo"
        />
    )
}

export default Logo