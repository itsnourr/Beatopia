import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SettingsPage.css'; 

import SettingsInputField from './SettingsInputField';
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import FooterPlayer from '../Player/FooterPlayer';
import SettingsPanel from './SettingsPanel';

const SettingsPage = ({ username, updateFooterPlayer }) => { 

        return (
        <div className='settings-page-wrapper'>

            <PostAuthNavbar/>
            <SettingsPanel username={username} />
            {/* <FooterPlayer trackName={"RnB"} audioPath={`${process.env.PUBLIC_URL}/RnB.wav`}/> */}

        </div>    
  );
};

export default SettingsPage;
