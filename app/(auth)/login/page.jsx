import { loginWithGithub, loginWithCredentials } from "@/libs/actions"
import styles from "./login.module.css"
const LoginPage = async () => {
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.loginForm} action={loginWithCredentials}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <form className={styles.githubForm} action={loginWithGithub}>
          <button>Login With Github</button>
        </form>
        </div>
      </div>
    )
}
  
export default LoginPage