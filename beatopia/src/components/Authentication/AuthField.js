import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AuthField.css'; 

const AuthField = ({ placeholder, type, value, onChange}) => {
    
    return (
    <div className='field-container'>
            <input
                type={type}
                className="input-field"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
              />
    </div>
    
  );
};

export default AuthField;
