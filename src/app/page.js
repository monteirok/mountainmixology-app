import Navbar from './components/navbar/Navbar'
import LargeLogo from './components/logo/LargeLogo'
import LargeLogo2 from './components/logo/LargeLogo2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'
import logoStyles from './components/logo/Logo.module.css'
import globalStyles from './globals.css'

export default function Home() {
  return (
    <div className={`${Styles.mainContainer} container text-center`}>
      {/* HEADER */}
      <h1 className={`${Styles.head} fw-bold`}>
        Welcome to Mountain Mixology!
      </h1>
      {/* SUB HEADER */}
      <div className={`${Styles.subHead} fst-italic fw-light`}>
        ⁃cocktail & wine catering⁃
      </div>
      {/* CONTENT */}
      {/* large logo */}
      <div className={`${logoStyles.logoContainer}`}>
        <LargeLogo />
      </div>
      {/* large logo2 */}
      <div className={`${logoStyles.logoContainer}`}>
        <LargeLogo2 />
      </div>
    </div>
  )
}
