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
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 

  // Buttons Configuration
  const submitSignup = async () => {
    // Check if passwords match
    if (password !== checkPassword) {
      setError("Passwords do not match.");
      return;
    }
    const requestBody = {
      username,
      email,
      password,
    };

    try {
      setLoading(true);
      setError(""); // Clear any previous error

      // Send POST request to Flask back-end
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page or show success message)
        alert('Account created successfully!');
        window.location.href = '/login'; 
      } else {
        // Handle error from back-end
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error('Error during sign-up:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <button className='submit-button' type="submit" onClick={submitSignup}>Submit</button>
        {loading ? 'Creating Account...' : ''}
    </div>

    
    
  );
};

export default SignupForm;
