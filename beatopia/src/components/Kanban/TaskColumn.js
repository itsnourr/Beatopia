
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({name}) => {

  const tasks = [
    { title: "Hausaufgaben Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    { title: "Solve HWK 1", label: "Math", dueDate: "Oct 30, 2024", done: true },
    { title: "Project Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
    { title: "Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
  ];

  return (
    <div className="container-fluid">
      <div className="row"> {/* Bootstrap row for alignment */}
        <div className="col-12 kanban-column"> {/* Full-width bootstrap column */}

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
