import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import MyMixes from './MyMixes';
import FooterPlayer from '../Player/FooterPlayer';
import './MixesPage.css';

const MixesPage = ({updateFooterPlayer}) => { 

  return (
    <div className="mixes-page-wrapper">
        <PostAuthNavbar/>
        <MyMixes updateFooterPlayer={updateFooterPlayer}/>
        {/* <FooterPlayer trackName={"RnB"} audioPath={`${process.env.PUBLIC_URL}/RnB.wav`}/> */}
    </div> 
  );
};

export default MixesPage;
