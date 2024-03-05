import './LoginSignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignUp = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
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
        <div className="submit">Sign Up</div>
        <div className="submit">Log Up</div>
      </div>
    </div>
  )
}

export default LoginSignUp