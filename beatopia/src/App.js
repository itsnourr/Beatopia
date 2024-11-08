
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import React from 'react'; // Import React
import './App.css';

// <---------- Area Reserved for Components' Constructors ------------>

import KanbanBoard from './components/Kanban/KanbanBoard';
import TaskColumn from './components/Kanban/TaskColumn';
import InputCard from './components/Kanban/InputCard';
import TaskCard from './components/Kanban/TaskCard';
import FooterPlayer from './components/Player/FooterPlayer';
import AuthField from './components/Authentication/AuthField';
import SignupForm from './components/Authentication/SignupForm';
import LoginForm from './components/Authentication/LoginForm';
import PostAuthNavbar from './components/Navigation/PostAuthNavbar';
import SettingsInputField from './components/Settings/SettingsInputField';
import SettingsPanel from './components/Settings/SettingsPanel';

// <------------------------------------------------------------------>

function App() {
  

  return (
    <div className="App">

      <body>

          <PostAuthNavbar/>
          
          <KanbanBoard/>

          <FooterPlayer trackName={"Summer Vibes"}/>
          
      </body>
      
      
    </div>
  );
}

export default App;