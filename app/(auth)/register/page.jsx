import { registerWithCredentials } from "@/libs/actions";
import styles from "./register.module.css"
const RegisterPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Register</h1>
          <form className={styles.registerForm} action={registerWithCredentials}>
            <input type="text" name="username" placeholder="Username" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm_password" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default RegisterPage