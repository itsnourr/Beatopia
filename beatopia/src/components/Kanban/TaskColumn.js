import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ name, color, tasks, columnId }) => {

  const addTask = () => {};

  return (
    <div className="container-fluid">
      <div className="row">
        <div 
          className="col-12 kanban-column"
          style={{ background: `linear-gradient(to bottom, ${color}, #6E2AF5)` }}
        >
          <div className="row-container">
            <h2 className="column-title">{name}</h2>
            <button onClick={addTask}>
                <i className="bi bi-plus-lg add-icon" title="Create New Task"></i>
            </button>
          </div>

          <Droppable droppableId={columnId}>
            {(provided) => (
              <div 
                className="task-cards-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <TaskCard 
                      key={task.id} 
                      id={task.id} 
                      title={task.title} 
                      label={task.label} 
                      dueDate={task.dueDate} 
                      done={task.done} 
                      index={index}
                    />
                  ))
                ) : (
                  // This div acts as a placeholder for empty columns
                  <div style={{ padding: '16px', textAlign: 'center', color: '#fff' }}>
                    No tasks
                  </div>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
