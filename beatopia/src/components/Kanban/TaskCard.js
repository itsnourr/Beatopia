
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './TaskCard.css';

const TaskCard = ({ title, label, dueDate, done}) => {
  return (
    <div className="card-container col-md-4"> {/* Bootstrap col for responsiveness */}
      <div className="card text-center"> {/* Bootstrap card */}
        <div className="card-body"> 
            <div className="card-content">
                <div className="row-container">
                    <div className="card-title">{title}</div>
                    <i className="bi bi-pencil-square edit-icon"></i>
                </div>
                
                <div className="row-container">
                    <div className="card-label">{label}</div>
                    <div className="empty-flexbox"></div>
                </div>
                
                <div className="row-container">
                    <div className="due-date">Due {dueDate}</div>
                    <i className={`${(done) ? "bi bi-trash-fill" : "bi bi-check-square-fill"} card-icon`}></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
