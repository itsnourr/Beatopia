
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import React from 'react'; // Import React
import logo from './logo.svg'; // Logo import
import './App.css'; // Custom CSS

// <---------- Area Reserved for Components' Constructors ------------>

import TaskCard from './components/Kanban/TaskCard';
import TaskColumn from './components/Kanban/TaskColumn';
{/* <TaskCard title="Submit Lab 5" label="MCO Lab" dueDate="Nov 29, 2024" done /> */}

// <------------------------------------------------------------------>

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}

      {/* Example content */}
      <body>
          <TaskColumn name="To-Do" />
      </body>
      
      
    </div>
  );
}

export default App;