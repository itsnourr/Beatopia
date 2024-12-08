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
import ProtectedRoute from './components/Protected/ProtectedRoute';

// <------------------------------------------------------------------>

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center', justifyContent: 'center', }}>

        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />

            <Route path="/home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
            <Route path="/mixes" element={<ProtectedRoute> <MixesPage /> </ProtectedRoute>} />    
            <Route path="/mixlab" element={<ProtectedRoute> <MixLabPage /> </ProtectedRoute>} />  
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute> <SettingsPage/> </ProtectedRoute>} />    
        </Routes>

      </div> 
    </Router>
  );
};

export default App;