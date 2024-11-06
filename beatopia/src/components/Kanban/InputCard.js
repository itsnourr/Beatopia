import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './InputCard.css'; 

const InputCard = ({ initialTitle = '', initialLabel = '', initialDueDate = '', onSave }) => {
    
  const [title, setTitle] = useState(initialTitle);
  const [label, setLabel] = useState(initialLabel);
  const [dueDate, setDueDate] = useState(initialDueDate);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleLabelChange = (e) => setLabel(e.target.value);
  const handleDueDateChange = (e) => setDueDate(e.target.value);
  
  // Buttons Configuration
  const saveTask = () => {};
  const cancelTaskCreation = () => {};

  return (
    <div className="card-container col-md-4">
      <div className="card text-center">
        <div className="card-body">
          <div className="card-content">
            <div className="row-container">
              <input
                type="text"
                className="title-inputfield"
                placeholder="Enter Title..."
                value={title}
                onChange={handleTitleChange}
              />
              <button onClick={saveTask}>
                  <i className="bi bi-floppy2-fill save-icon" title="Save Task"></i>
              </button>

            </div>
            
            {/* Label Input */}
            <div className="row-container">
              <input
                type="text"
                className="label-inputfield"
                placeholder="Enter Label"
                value={label}
                onChange={handleLabelChange}
              />
            </div>

            {/* Due Date Input */}
            <div className="row-container">

                <div className='row-due-date-container'>
                    <div className="due-date">Due</div>
                    <input
                        type="date"
                        className="due-date-inputfield"
                        placeholder='Add'
                        value={dueDate}
                        onChange={handleDueDateChange}
                    />
                </div>

              <button onClick={cancelTaskCreation}>
                  <i className="bi bi-x-square-fill card-icon" title="Cancel Task Creation"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
