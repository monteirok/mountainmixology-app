import Link from 'next/link'
import LargeLogo2 from '../components/logo/LargeLogo2'
import XmasMenu from '../components/menus/XmasMenu'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'
import logoStyles from '../components/logo/Logo.module.css'
import { ST } from 'next/dist/shared/lib/utils'
import { Imprima } from 'next/font/google'

export default function Page() {
  return (
    <div className={`${Styles.contentContainer} ${Styles.frostedGlass}`}>
      {/* header */}
      <h1 className={`${Styles.header} container fw-bold text-center`}>
        DRINKS
      </h1>
    {/* xmas menu */}
      <div className={`${logoStyles.logoContainer} ${Styles.drinksMenu} text-center`}>
        <XmasMenu />
      </div>
    </div>
  )
}
