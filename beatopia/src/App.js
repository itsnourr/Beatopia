
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import React from 'react'; // Import React
import './App.css';

// <---------- Area Reserved for Components' Constructors ------------>

import KanbanBoard from './components/Kanban/KanbanBoard';
import TaskColumn from './components/Kanban/TaskColumn';
import InputCard from './components/Kanban/InputCard';
import TaskCard from './components/Kanban/TaskCard';

// <------------------------------------------------------------------>

function App() {
  

  return (
    <div className="App">

      {/* <header className="App-header">
      </header> */}

      {/* Example content */}
      <body>
          
          <KanbanBoard/>
          {/* <InputCard/> */}
          {/* <TaskCard title="smth" label="hey" dueDate="2022" done /> */}
          
      </body>
      
      
    </div>
  );
}

export default App;