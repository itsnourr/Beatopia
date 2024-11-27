import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import React from 'react'; // Import React
import './App.css';

// <---------- Area Reserved for Import Statements ------------------->

import SignupForm from './components/Authentication/SignupForm';
import LoginForm from './components/Authentication/LoginForm';
import Home from './components/Homepage/Home';
import Dashboard from './components/Kanban/Dashboard';
import MixesPage from './components/MyMixes/MixesPage';
import LandingPage from './components/Landing/LandingPage';
import SettingsPage from './components/Settings/SettingsPage';
import MixLabPage from './components/MixLab/MixLabPage';

// <------------------------------------------------------------------>

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', justifyContent: 'center', }}>

        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mixes" element={<MixesPage />} />    
            <Route path="/mixlab" element={<MixLabPage />} />    
            <Route path="/settings" element={<SettingsPage username={"its.nourr"} />} />    
        </Routes>

      </div> 
    </Router>
  );
};

export default App;