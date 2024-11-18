import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
import PreAuthNavbar from './components/Navigation/PreAuthNavbar';
import SettingsInputField from './components/Settings/SettingsInputField';
import SettingsPanel from './components/Settings/SettingsPanel';
import SearchBar from './components/Navigation/SearchBar';
import MyMixes from './components/MyMixes/MyMixes';
import Home from './components/Homepage/Home';

// <------------------------------------------------------------------>

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
      <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
=======
    <div className="App">

      <body>

          <PostAuthNavbar/>
          
          {/* <SettingsPanel username={"its.nourr"}/> */}
          {/* <KanbanBoard/> */}
          {/* <SearchBar placeholder={"Search my mixes by name eg. lo-fi study mix"}/> */}
          <Home/>

          <FooterPlayer trackName={"Summer Vibes"}/>
          
      </body>
      
      
    </div>
>>>>>>> 69a67ade0d741d2edf75af700d98a922dd490d3a
  );
};

export default App;