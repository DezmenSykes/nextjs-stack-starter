import { loginWithGithub } from "../../../libs/actions"
const LoginPage = async () => {
  return (
      <div>
        <h1>Login</h1>
        <form action={loginWithGithub}>
          <button>Login With Github</button>
        </form>
      </div>
    )
}
  
export default LoginPage