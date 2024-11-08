import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import './PreAuthNavbar.css';

const PreAuthNavbar = () => {

    const goToLogin = () => {};
    const goToSignup = () => {};

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/navbar-logo.png`} alt="Logo" className='navlogo'/>
        </div>
        <div className='pages-links'>
            <button className='navbar-button' onClick={goToLogin}>Login</button>
            <button className='signup-button' onClick={goToSignup}>Sinup</button>
        </div>
    </div>
  );
};

export default PreAuthNavbar;
