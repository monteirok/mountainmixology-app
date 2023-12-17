import React from 'react'
import Image from 'next/image'

const Background = () => {
    return (
        <Image
            src="/images/background.webp"
            width={1980}
            height={1200}
            alt="background"
        />
    )
}

export default Background