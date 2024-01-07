import LargeLogo from './components/logo/LargeLogo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'
import logoStyles from './components/logo/Logo.module.css'

export default function Home() {
  return (
    <>
      <div className={`${Styles.comingSoonContainer} container col-md-7 text-center`}>
      <div className={`${Styles.comingSoonTextContainer} ${Styles.frostedGlass} ${Styles.whiteGlow} col-sm-7 col-md-7 mx-auto p-3`}>
          <h1 className={`${Styles.comingSoonText} m-auto fs-1 fw-bold`}>
            WELCOME TO
          </h1>
        </div>
        <div className={`${logoStyles.logoContainer}`}>
          <LargeLogo />
        </div>
      </div>
    </>
  )
}
