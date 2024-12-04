import React, {useState} from 'react'
import './LogInSignUp.css'

const LogInSignUp = () => {

const [action,setAction] = useState("Sign Up");

const SignUp = ()=>{
    setAction("Sign up");

}
const Login = ()=>{
    setAction("Login");
    
}
  return (
    <div className="container">
        <div className="headerText">Flash Kartice Dragani</div>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick = {SignUp}>Sign Up</div>
            <div className={action==="Sign up"?"submit gray":"submit"} onClick = {Login}>Log In</div>
        </div>
    </div>
  )
}

export default LogInSignUp