import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import InputCard from './InputCard';
import './TaskColumn.css';

const TaskColumn = ({ name, color, tasks, columnId, updateTask, onDragEnd, addTaskToColumn, onDelete }) => {
  const [isInputCardVisible, setInputCardVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = () => {
    setInputCardVisible(!isInputCardVisible);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setInputCardVisible(true);
  };

  const handleSaveTask = (updatedTask) => {
    const newTask = {
        ...updatedTask,
        id: `${Date.now()}`, // Unique ID
        done: false,
    };

    addTaskToColumn(columnId, newTask); // Add to parent state
    setInputCardVisible(false);
    setTaskToEdit(null);
};

  const handleCancelTaskEdit = () => {
    setInputCardVisible(false);
    setTaskToEdit(null);
  };

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
                {isInputCardVisible && (
                  <InputCard
                    initialTitle={taskToEdit?.title || ''}
                    initialLabel={taskToEdit?.label || ''}
                    initialDueDate={taskToEdit?.dueDate || ''}
                    onSave={handleSaveTask}
                    onCancel={handleCancelTaskEdit}
                  />
                )}

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
                      onDelete = {onDelete}
                      onEdit={() => handleEditTask(task)}
                    />
                  ))
                ) : (
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
