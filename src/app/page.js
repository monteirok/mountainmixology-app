import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={`${styles.mainContainer} container p-5`}>
      <div className='text-center'>
          <h1 className={`${styles.head} fw-bold`}>Welcome to Mountain Mixology!</h1>
          <div className={`${styles.subHead} fs-4 fst-italic fw-light`}>⁃ Cocktail & Wine Catering ⁃</div>
      </div>
    </div>
  )
}
