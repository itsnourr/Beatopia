import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SettingsPanel.css'; 

import SettingsInputField from './SettingsInputField';

const SettingsPanel = () => {

    const oldPasswordConfirmed = false;
    
    const [newUsername, setNewUsername] = useState("");
    const [newMailAddress, setNewMailAddress] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleNewUsernameInput = (e) => setNewUsername(e.target.value);
    const handleNewMailAddress = (e) => setNewMailAddress(e.target.value);
    const handleOldPasswordInput = (e) => setOldPassword(e.target.value);
    const handleNewPasswordInput = (e) => setNewPassword(e.target.value);

    const submitNewUsername = () => {};
    const submitNewMailAddress = () => {};
    const submitOldPassword = () => {
        // some logic here before confirming old password
        oldPasswordConfirmed = true;
    };
    const submitNewPassword = () => {};

    return (
        <div className='settings-panel'>
            
            <SettingsInputField placeholder={"Enter new username"} type={"text"} value={newUsername} 
                                onChange={handleNewUsernameInput} submit={submitNewUsername} disabled={false} />
            
            <SettingsInputField placeholder={"Enter new mail address"} type={"text"} value={newMailAddress} 
                                onChange={handleNewMailAddress} submit={submitNewMailAddress} disabled={false} />

            <SettingsInputField placeholder={"Enter old password first"} type={"password"} value={oldPassword} 
                                onChange={handleOldPasswordInput} submit={submitOldPassword} disabled={false} />
            
            <SettingsInputField placeholder={"Enter new password here"} type={"password"} value={newPassword} 
                                onChange={handleNewPasswordInput} submit={submitNewPassword} disabled={!oldPasswordConfirmed} />

            <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="Avatar"/>

        </div>    
  );
};

export default SettingsPanel;
