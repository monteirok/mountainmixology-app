import LargeLogo2 from '../components/logo/LargeLogo2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'
import logoStyles from '../components/logo/Logo.module.css'

export default function Page() {
  return (
    <div className={`${Styles.aboutUsContainer}`}>
      {/* header */}
      <h1 className={`${Styles.header} container fw-bold fst-u text-center text-decoration-underline`}>
        Our Menu
      </h1>
      {/* large logo */}
      <div className={`${logoStyles.logoContainer}`}>
        <LargeLogo2 />
      </div>
    </div>
  )
}
