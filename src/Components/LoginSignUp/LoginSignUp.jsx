import './LoginSignUp.css'
import email_icon from '../Assets/email.png'
import name_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

function LoginSignUp() {

  const [action, setAction] = useState("Login")

  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <p>{action}</p>
          <p>Create your account</p>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={name_icon} alt="name_icon" />
            <input type="text" placeholder='Username' />
          </div>

          {action === "Login" ? <div></div> :
            <div className="input">
              <>
                <img src={email_icon} alt="email_icon" />
                <input type="email" placeholder='Email' />
              </>
            </div>}
          <div className="input">
            <img src={password_icon} alt="password_icon" />
            <input type="password" placeholder='Password' />
          </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">
          <a href="#"> Forgotten password?</a>
        </div>}

        <div className="btns">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
            Sign Up
          </div>
          <p>Or</p>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>
            Sign In with Google
          </div>
        </div>
        {action === "Sign Up" ?
          <div className="created-acct">
            <p>Already have an account?</p> <span onClick={() => { setAction("Login") }}>Log In</span>
          </div> :
          <div className="no-acct">
            <p>Dont have an account?</p> <span onClick={() => { setAction("Sign Up") }}>Sign Up</span>
          </div>
        }


      </div>
    </div >
  )
}

export default LoginSignUp