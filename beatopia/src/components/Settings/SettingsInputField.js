import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SettingsInputField.css'; 

const SettingsInputField = ({ placeholder, type, value, onChange, submit, disabled}) => {

    return (
        <div className='settings-field-button-wrapper'>
                <div className={`${(disabled) ? 
                    "disabled-settings-field-container" : "settings-field-container"}`}>

                        <input
                            type={type}
                            className={disabled ? "disabled-settings-input-field" : "settings-input-field"}
                            title={disabled ? "Enter Old Password First" : "Enter New Info Here"}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            disabled={disabled}
                            required
                        />

                </div>

                <div>
                    <button className={`${(disabled) ? 
                            "disabled-settings-submit-button" : "settings-submit-button"}`}
                            
                            title={disabled ? "Enter Old Password First" : "Submit Changes"}

                            onClick={submit}>Submit</button>
                </div>
        </div>    
  );
};

export default SettingsInputField;
