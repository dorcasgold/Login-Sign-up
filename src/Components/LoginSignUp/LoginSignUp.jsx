import './LoginSignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up")

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder='Name' />
        </div>
        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className="forget-password">Lost Password? <span>Click Here</span></div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onclick={() => { setAction("Login") }}>Log In</div>
      </div>
    </div >
  )
}

export default LoginSignUp