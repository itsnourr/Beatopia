import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import React from 'react'; // Import React
import './App.css';

// <---------- Area Reserved for Import Statements ------------------->

import SignupForm from './components/Authentication/SignupForm';
import LoginForm from './components/Authentication/LoginForm';
import SettingsPage from './components/Settings/SettingsPage';
import LandingPage from './components/Landing/LandingPage';
import MixLabPage from './components/MixLab/MixLabPage';
import MixesPage from './components/MyMixes/MixesPage';
import HomePage from './components/Homepage/Homepage';
import Dashboard from './components/Kanban/Dashboard';

// <------------------------------------------------------------------>

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', justifyContent: 'center', }}>

        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/mixes" element={<MixesPage />} />    
            <Route path="/mixlab" element={<MixLabPage />} />    
            <Route path="/register" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<SettingsPage username={"its.nourr"} />} />    
        </Routes>

      </div> 
    </Router>
  );
};

export default App;