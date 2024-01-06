import React from 'react'
import Image from 'next/image'
import Styles from './XmasMenu.module.css'

const Menu = () => {
    return (
        <Image
            className={`${Styles.xmasMenu}`}
            src="/menus/xmas-menu.png"
            width={800}
            height={800}
            alt="Christmas menu"
        />
    )
}

export default Menu