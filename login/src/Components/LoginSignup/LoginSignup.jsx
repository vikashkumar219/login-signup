import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pasword_icon from '../Assets/password.png'

export const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt=""/>
                <input type="text"/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email"/>
            </div>
            <div className="input">
                <img src={pasword_icon} alt=""/>
                <input type="password"/>
            </div>
        </div>
    
        <div className="forgot-password">Lost password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Signup"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

