import React from 'react'

function Login() {
  return (
    <div>
      <form>
        <label>email</label>
        <input type='email'/>
        <label>Password</label>
        <input type='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
