import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import AdminAuthNavbar from '../Navigation/AdminAuthNavbar';
// import KanbanBoard from './KanbanBoard';
import './Admin.css';
import FooterPlayer from '../Player/FooterPlayer';
import FileUpload from './FileUpload';

const Admin = ({updateFooterPlayer}) => { 

    return (
        <div className="admin-container">
            <AdminAuthNavbar/>
            <div className="container">
          <h2 className="upload-beat-heading">Upload a <span className='beatopia-span'> Beat </span> Audio File</h2>
          <FileUpload />
          <h2 className="upload-sound-heading">Upload a <span className='beatopia-span'> Sound </span> Audio File</h2>
          <FileUpload />
        </div>
        </div>
    )
};

export default Admin;