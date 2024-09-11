const RegisterPage = () => {
    return (
      <div>
        <h1>Register</h1>
        <form action={registerWithCredentials}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="confirm_password" placeholder="Confirm Password" />
          <button>Register</button>
        </form>
      </div>
    )
  }
  
  export default RegisterPage