import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SettingsPanel.css'; 
import { useNavigate } from 'react-router-dom';

import SettingsInputField from './SettingsInputField';

const SettingsPanel = ({ username }) => {

    const oldPasswordConfirmed = false;
    
    const [newUsername, setNewUsername] = useState("");
    const [newMailAddress, setNewMailAddress] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleNewUsernameInput = (e) => setNewUsername(e.target.value);
    const handleNewMailAddress = (e) => setNewMailAddress(e.target.value);
    const handleOldPasswordInput = (e) => setOldPassword(e.target.value);
    const handleNewPasswordInput = (e) => setNewPassword(e.target.value);

    const navigate = useNavigate();

    const submitNewUsername = () => {};
    const submitNewMailAddress = () => {};
    const submitOldPassword = () => {
        // some logic here before confirming old password
        oldPasswordConfirmed = true;
    };
    const submitNewPassword = () => {};

    // Danger Zone

    const logout = () => {
        // Clear authentication token
        localStorage.removeItem('token');
        // Redirect to the landing page
        navigate('/');
    };
    const deleteAccount = () => {};

    return (
        <div className='settings-panel-container'>

            <div className='username-container'>
                <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt="Avatar" className={"avatar"}/>
                <h4 className='username'>Hello {username} !</h4>
            </div>

            <div className='settings-panel'>

                <div className='settings-left-side'>

                        <div className='settings-field-desc'>Change username :</div>

                        <div className='settings-field-desc'>Change email address :</div>

                        <div className='settings-field-desc'>Change your password :</div>

                        <div className='settings-field-desc'></div>

                        <button className='logout-button' onClick={logout} title='Logout'>Logout</button>

                        <button className='delete-account' onClick={deleteAccount} title='Delete Account'>Delete Account</button>

                </div>

                <div className='settings-fields'>
            
                    <SettingsInputField placeholder={"Enter new username"} type={"text"} value={newUsername} 
                                        onChange={handleNewUsernameInput} submit={submitNewUsername} disabled={false} />
                    
                    <SettingsInputField placeholder={"Enter new mail address"} type={"text"} value={newMailAddress} 
                                        onChange={handleNewMailAddress} submit={submitNewMailAddress} disabled={false} />

                    <SettingsInputField placeholder={"Enter old password first"} type={"password"} value={oldPassword} 
                                        onChange={handleOldPasswordInput} submit={submitOldPassword} disabled={false} />
                    
                    <SettingsInputField placeholder={"Enter new password here"} type={"password"} value={newPassword} 
                                        onChange={handleNewPasswordInput} submit={submitNewPassword} disabled={!oldPasswordConfirmed} />
                 </div>

            </div>

        </div>    
  );
};

export default SettingsPanel;
