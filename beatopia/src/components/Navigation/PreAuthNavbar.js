import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import './PreAuthNavbar.css';
import { useNavigate } from 'react-router-dom';

const PreAuthNavbar = () => {

    const navigate = useNavigate();

    const goToLogin = () => navigate('/login');
    const goToSignup = () => navigate('/register');

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/navbar-logo.png`} alt="Logo" className='navlogo'/>
        </div>
        <div className='pages-links'>
            <button className='login-button' onClick={goToLogin} title='Login'>Log in</button>
            <button className='signup-button' onClick={goToSignup} title='Signup'>Sign up</button>
        </div> 
    </div>
  );
};

export default PreAuthNavbar;
