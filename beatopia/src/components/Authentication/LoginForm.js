import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthField from './AuthField';
import './LoginForm.css';

const LoginForm = () => {
    
  const [loginText, setLoginText] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const { login } = useAuth();

  
  const handleLoginTextInput = (e) => setLoginText(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  // Buttons Configuration
  const authenticateLogin = async () => {
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: loginText, // or email, depending on your back-end setup
        password: password
      });
  
      const token = response.data.access_token;
      localStorage.setItem('token', token);
      console.log('Login successful. Redirecting...');
      window.location.href = '/home';
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };
  const forgotPassword = () => {
    console.log('Redirecting to the password reset page...');
  };

  const backToLanding = () => {}

  return (
    <div className='overall-container login'>
        <div className='back-button-container login'>
          <button className='back-button' title='Back to Beatopia' onClick={backToLanding}>← Back to Beatopia</button>
        </div>
        <h1 className='welcome-message-login'>Welcome back to <b>Beatopia</b></h1>
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
