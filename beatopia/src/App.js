import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import React from 'react'; // Import React
import logo from './logo.svg'; // Logo import
import './App.css'; // Custom CSS

function App() {
  return (
    <div className="App">
      {/* Your design starts here */}
      
      {/* Example header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Your App</h1>
      </header>

      {/* Example content */}
      <div className="container">
        <h2>Your Main Content</h2>
        {/* Add your components or layout here */}
      </div>

    </div>
  );
}

export default App;