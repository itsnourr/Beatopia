import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import './PostAuthNavbar.css';
import { useNavigate } from 'react-router-dom';

const PostAuthNavbar = () => {

    const navigate = useNavigate();

    const goToHome = () => navigate('/home');
    const goToDashboard = () => navigate('/dashboard');
    const goToMixLab = () => navigate('/mixlab');
    const goToMyMixes = () => navigate('/mixes');
    const goToSettings = () => navigate('/settings');

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <img src={`${process.env.PUBLIC_URL}/navbar-logo.png`} alt="Logo" className='navlogo' onClick={goToHome} title='Back to Home'/>
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
