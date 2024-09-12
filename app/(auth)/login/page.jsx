import { loginWithGithub, loginWithCredentials } from "@/libs/actions"
const LoginPage = async () => {
  return (
      <div>
        <h1>Login</h1>
        <form action={loginWithCredentials}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <form action={loginWithGithub}>
          <button>Login With Github</button>
        </form>
      </div>
    )
}
  
export default LoginPage