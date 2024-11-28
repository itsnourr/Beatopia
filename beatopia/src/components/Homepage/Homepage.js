import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import Home from './Home';
import FooterPlayer from '../Player/FooterPlayer';
import './Homepage.css';

const Homepage = () => { 

  return (
    <div className="home-page-wrapper">
        <PostAuthNavbar/>
        <Home/>
        <FooterPlayer trackName={"Winter Vibes"}/>
    </div> 
  );
};

export default Homepage;
