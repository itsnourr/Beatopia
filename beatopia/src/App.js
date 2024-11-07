
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

// <------------------------------------------------------------------>

function App() {
  

  return (
    <div className="App">

      <body>
          
          {/* <KanbanBoard/> */}

          <PostAuthNavbar/>
          <KanbanBoard/>
          <FooterPlayer trackName={"Summer Hits"}/>

          {/* <FooterPlayer trackName={"Summer Breeze"}/> */}
          
      </body>
      
      
    </div>
  );
}

export default App;