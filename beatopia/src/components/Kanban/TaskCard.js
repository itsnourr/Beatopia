import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TaskCard.css';

const TaskCard = ({ id, title, label, dueDate, done, index, onDelete }) => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

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
                  <div className="card-title taskcard" title={title}>
                    {title}
                  </div>
                </div>

                <div className="row-container taskcard">
                  <div className="card-label taskcard">{label}</div>
                  <div className="empty-flexbox taskcard"></div>
                </div>

                <div className="row-container taskcard">
                  <div className="due-date taskcard">
                    Due {formatDate(dueDate)}
                  </div>


                  <button onClick={() => onDelete(id)}>
                    <i
                      className={'bi bi-trash-fill taskcard-icon  taskcard'}
                      title={'Archive Task'}
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
