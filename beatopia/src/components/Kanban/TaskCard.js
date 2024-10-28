import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import { Draggable } from 'react-beautiful-dnd';
import './TaskCard.css';

const TaskCard = ({ id, title, label, dueDate, done, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div 
          className="card-container"
          title={title}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card text-center">
            <div className="card-body">
                <div className="card-content">
                    <div className="row-container">
                        <div className="card-title" title={title}>{title}</div>
                        <i className="bi bi-pencil-square edit-icon" title="Edit Task"></i>
                    </div>
                    
                    <div className="row-container">
                        <div className="card-label">{label}</div>
                        <div className="empty-flexbox"></div> 
                    </div>
                    
                    <div className="row-container">
                        <div className="due-date">Due {dueDate}</div>
                        <i className={`${(done) ? "bi bi-trash-fill" : "bi bi-check-square-fill"} card-icon`}
                           title={(done) ? "Archive Task" : "Mark as Done"}
                        ></i>
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
