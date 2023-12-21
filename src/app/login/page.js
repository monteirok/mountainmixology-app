import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from './page.module.css'

export default function Page() {
  return (
    <div className={`${Styles.loginContainer} container`}>
      <div className={`${Styles.formContainer} ${Styles.frostedGlass} col-md-6`}>
        <form className={`${Styles.form} text-center`} action="/login" method="post" autofocus>
          <input type="text" name="username" placeholder="Username" required />
          <br></br>
          <input type="password" name="password" placeholder="Password" required />
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
