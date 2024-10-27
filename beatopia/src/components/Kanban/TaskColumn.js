
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.css';
import InputCard from './InputCard';

const TaskColumn = ({name, color, tasks}) => {

  return (
    <div className="container-fluid">
      <div className="row"> {/* Bootstrap row for alignment */}
        <div className="col-12 kanban-column" 
          style={{ background: `linear-gradient(to bottom, ${color}, #6E2AF5)` }}>

          <div className="row-container">
              <h2 className="column-title">{name}</h2>
              <i className="bi bi-plus-lg add-icon" title="Create New Task"></i>
          </div>

          <div className="task-cards-container">
            {tasks.map((task, index) => (
              <div className="col-12" key={index}> 
                <TaskCard 
                  title={task.title} 
                  label={task.label} 
                  dueDate={task.dueDate} 
                  done={task.done} 
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
