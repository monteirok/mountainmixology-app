import LargeLogo from './components/logo/LargeLogo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'
import logoStyles from './components/logo/Logo.module.css'

export default function Home() {
  return (
    <div className={`${Styles.mainContainer} container text-center`}>
      <h1 className={`${Styles.head} fw-bold`}>
        COMING SOON
      </h1>
      {/* large logo */}
      <div className={`${logoStyles.logoContainer}`}>
        <LargeLogo />
      </div>
    </div>
  )
}
