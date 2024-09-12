import { loginWithGithub  } from "@/libs/actions"
import styles from "./login.module.css"
import LoginForm from "../../../components/loginForm/loginForm"

const LoginPage =  () => {
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
        <form className={styles.githubForm} action={loginWithGithub}>
          <button>Login With Github</button>
        </form>
        </div>
      </div>
    )
}
  
export default LoginPage