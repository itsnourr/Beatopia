import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import PostAuthNavbar from '../Navigation/PostAuthNavbar';
import KanbanBoard from './KanbanBoard';
import FooterPlayer from '../Player/FooterPlayer';
import './Dashboard.css';

const Dashboard = ({updateFooterPlayer}) => { 

  return (
    <div className="dashboard-wrapper">
        <PostAuthNavbar/>
        <KanbanBoard/>
    </div>
  );
};

export default Dashboard;
