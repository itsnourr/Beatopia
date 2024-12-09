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
        <FooterPlayer trackName={"RnB"} audioPath={`${process.env.PUBLIC_URL}/RnB.wav`}/>
    </div> 
  );
};

export default Homepage;
