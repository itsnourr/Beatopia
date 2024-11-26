import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import { Draggable } from 'react-beautiful-dnd';
import './TaskCard.css';

const TaskCard = ({ id, title, label, dueDate, done, index }) => {

  const editTask = () => {}; 
  const markDone = () => {};
  const archiveTask = () => {};

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div 
          className="card-container taskcard"
          title={title}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card text-center taskcard">
            <div className="card-body taskcard">
                <div className="card-content taskcard">
                    <div className="row-container taskcard">
                        <div className="card-title taskcard" title={title}>{title}</div>

                        <button onClick={editTask}>
                            <i className="bi bi-pencil-square task-edit-icon taskcard" title="Edit Task"></i>
                        </button>
                        
                    </div>
                    
                    <div className="row-container taskcard">
                        <div className="card-label taskcard">{label}</div>
                        <div className="empty-flexbox taskcard"></div> 
                    </div>
                    
                    <div className="row-container taskcard">
                        <div className="due-date taskcard">Due {dueDate}</div>

                        <button onClick={done ? archiveTask : markDone}>
                        <i className={`${(done) ? 
                              "bi bi-trash-fill" : "bi bi-check-square-fill"} taskcard-icon  taskcard`}
                           title={(done) ? "Archive Task" : "Mark as Done"}
                        ></i>

                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
