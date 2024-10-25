
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './Card.css';

const Card = ({ title, label, dueDate, done}) => {
  return (
    <div className="card-container col-md-4"> {/* Bootstrap col for responsiveness */}
      <div className="card text-center"> {/* Bootstrap card */}
        <div className="card-body">
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="label-container">
                    <div className="card-label">{label}</div>
                    <div className="empty-flexbox"></div>
                </div>
                
                <div className="card-footer">
                    <div className="due-date">Due {dueDate}</div>
                    <i className={`${(done) ? "bi bi-trash-fill" : "bi bi-check-square-fill"} card-icon`}></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
