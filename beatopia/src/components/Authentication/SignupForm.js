import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthField from './AuthField';
import './SignupForm.css'; 

const SignupForm = ({ }) => {
    
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handlePasswordCheckInput = (e) => setCheckPassword(e.target.value);

  // Buttons Configuration
  const submitSignup = () => {};

  return (
    <div className='overall-container'>
        <h1 className='welcome-message'>Welcome to <b>Beatopia</b></h1>
        <h4 className='intro-message'>Let's first create an account for you :</h4>
        <div className="inputfields-container">
              <AuthField type={"text"} placeholder={"Username"} value={username} onChange={handleUsernameInput}/>
              <AuthField type={"text"} placeholder={"Email Address"} value={email} onChange={handleEmailInput}/>
              <AuthField type={"password"} placeholder={"Enter Password"} value={password} onChange={handlePasswordInput}/>
              <AuthField type={"password"} placeholder={"Confirm Password"} value={checkPassword} onChange={handlePasswordCheckInput}/>
        </div>
        <button className='submit-button' type="submit" onClick={submitSignup}>Submit</button>
    </div>

    
    
  );
};

export default SignupForm;
