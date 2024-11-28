import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import { Draggable } from 'react-beautiful-dnd';
import './StaticTaskCard.css';

const StaticTaskCard = ({ id, title, label, dueDate, done, index }) => {

  const markDone = () => {};
  const archiveTask = () => {};

  return (
    <div className="card text-center statictaskcard">
            <div className="card-body statictaskcard">
                <div className="card-content statictaskcard">
                    
                    <div className="card-title statictaskcard" title={title}>{title}</div>
                    
                    <div className="row-container statictaskcard">
                        <div className="card-label statictaskcard">{label}</div>
                        <div className="empty-flexbox statictaskcard"></div> 
                    </div>
                    
                    <div className="row-container statictaskcard">
                        <div className="due-date statictaskcard">Due {dueDate}</div>

                        <button onClick={done ? archiveTask : markDone}>
                        <i className={`${(done) ? 
                              "bi bi-trash-fill" : "bi bi-check-square-fill"} taskcard-icon  statictaskcard`}
                           title={(done) ? "Archive Task" : "Mark as Done"}
                        ></i>

                        </button>
                    </div>
                </div>
            </div>
          </div>
  );
};

export default StaticTaskCard;
