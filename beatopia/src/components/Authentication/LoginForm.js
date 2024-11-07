import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthField from './AuthField';
import './LoginForm.css'; 

const LoginForm = ({ }) => {
    
  const [loginText, setLoginText] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginTextInput = (e) => setLoginText(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  // Buttons Configuration
  const authenticateLogin = () => {};
  const forgotPassword = () => {};

  return (
    <div className='overall-container'>
        <h1 className='welcome-message'>Welcome back to <b>Beatopia</b></h1>
        <h4 className='intro-message'>We bet you've missed your mixes :)</h4>
        <div className="inputfields-container">
              <AuthField type={"text"} placeholder={"Username or email address"} value={loginText} onChange={handleLoginTextInput}/>
              <AuthField type={"password"} placeholder={"Enter your password"} value={password} onChange={handlePasswordInput}/>
        </div>
        <button className='authenticate-button' type="authenticate" onClick={authenticateLogin}>Authenticate</button>
        <p className='forgot-password'>Forgot your password? &nbsp;
            <span onClick={forgotPassword} title="Reset Password" style={{ textDecoration: 'underline', cursor: 'pointer'}}>Click Here</span>
        </p>
    </div>

    
    
  );
};

export default LoginForm;
