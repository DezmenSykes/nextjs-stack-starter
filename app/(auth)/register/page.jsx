import RegisterForm from "../../../components/registerForm/registerForm"
import styles from "./register.module.css"
const RegisterPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Register</h1>
          <RegisterForm />
        </div>
      </div>
    )
  }
  
  export default RegisterPage