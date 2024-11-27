import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import MixLab from './MixLab';
import FooterPlayer from '../Player/FooterPlayer';
import './MixLabPage.css';

const MixLabPage = () => { 

  return (
    <div className="mixlab-page-wrapper">
        <PostAuthNavbar/>
        <MixLab/>
        <FooterPlayer trackName={"Winter Vibes"}/>
    </div> 
  );
};

export default MixLabPage;
