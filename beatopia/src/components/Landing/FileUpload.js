import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FileUpload.css';

const FileUpload = () => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <div className="custom-file-upload">
      <label htmlFor="fileInput" className="form-label">
        Upload File
      </label>
      <input
        type="file"
        className="form-control"
        id="fileInput"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
