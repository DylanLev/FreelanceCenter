import React from 'react'
import "./Register.scss"

const Register = () => {
  return (
    <div className='register'>
      <form>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input name="username" type="text" placeholder="davidazulay"/>
          <label htmlFor="">Email</label>
          <input name="email" type="email" placeholder="email"/>
          <label htmlFor="">Password</label>
          <input 
          name="password"
          type="password" 
          placeholder="davidazulay@gmail.com"
          />
        </div>
      </form>
    </div>
  )
}

export default Register