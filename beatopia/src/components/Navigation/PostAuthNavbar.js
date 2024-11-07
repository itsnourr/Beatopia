import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import './PostAuthNavbar.css';

const PostAuthNavbar = () => {

    const goToHome = () => {};
    const goToDashboard = () => {};
    const goToMixLab = () => {};
    const goToMyMixes = () => {};
    const goToSettings = () => {};

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <img src='\navbar-logo.png' className='navlogo' onClick={goToHome} title='Back to Home'/>
        </div>
        <div className='navbar-links'>
            <button className='navbar-button' onClick={goToDashboard} title='Dashboard'>Dashboard</button>
            <button className='navbar-button' onClick={goToMixLab} title='Mix Lab'>Mix Lab</button>
            <button className='navbar-button' onClick={goToMyMixes} title='My Mixes'>My Mixes</button>
            <button className='navbar-button' onClick={goToSettings} title='Settings'>Settings</button> 
        </div>
    </div>
  );
};

export default PostAuthNavbar;
