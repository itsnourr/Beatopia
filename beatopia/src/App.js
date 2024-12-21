import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import React, { useState, useRef } from 'react'; // Import React
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
import FooterPlayer from './components/Player/FooterPlayer';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import Admin from './components/Landing/Admin';
// <------------------------------------------------------------------->

const App = () => {

  const [trackName, setTrackName] = useState('');
  const [audioPath, setAudioPath] = useState('');
  const [isPlaying, setIsPlaying] = useState(false); // Track the play/pause state
  const audioRef = useRef(null);

  const trackPlayerUsage = (name, path, isPlaying) => {
    const playData = {
      trackName: name,
      audioPath: path,
      isPlaying: isPlaying,
      timestamp: new Date().toISOString(),  // Store timestamp
    };

    // You can log the data to console or send it to the backend
    console.log('Track usage data:', playData);

    // Optional: Send the data to the backend using fetch
    fetch('/api/track-usage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playData),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data tracked successfully:', data))
      .catch((error) => console.error('Error tracking data:', error));
  };

  const updateFooterPlayer = (name, path) => {
    // Only reset the player if the track or path has changed
    if (name !== trackName || path !== audioPath) {
      // Reset playing state to false
      setIsPlaying(false);

      if (audioRef.current) {
        audioRef.current.pause(); // Ensure the audio stops playing
        audioRef.current.load();  // Load the new track to be ready for playback
      }

      // Update the state with new track details
      setTrackName(name);
      setAudioPath(path);

      // Track the new data
      trackPlayerUsage(name, path, isPlaying);
    }
  };

  // When the audio starts playing or is paused
  const handleAudioPlayPause = () => {
    setIsPlaying((prevState) => {
      const newState = !prevState;
      trackPlayerUsage(trackName, audioPath, newState);
      return newState;
    });
  };  

  return (
    <Router>
      <div style={{ textAlign: 'center', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignupForm />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              // <ProtectedRoute>
                <HomePage updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/mixes"
            element={
              // <ProtectedRoute>
                <MixesPage updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/mixlab"
            element={
              // <ProtectedRoute>
                <MixLabPage updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              // <ProtectedRoute>
                <SettingsPage updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/contribute"
            element={
              // <ProtectedRoute>
                <Admin updateFooterPlayer={updateFooterPlayer} />
              // </ProtectedRoute>
            }
          />
        </Routes>

        {/* Render FooterPlayer globally */}
        {/* <ProtectedRoute> */}
          <FooterPlayer
            trackName={trackName}
            audioPath={audioPath}
            audioRef={audioRef}
          />
        {/* </ProtectedRoute> */}
      </div>
    </Router>
  );
};

export default App;
