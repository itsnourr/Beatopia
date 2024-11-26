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
    <div className="card-container col-md-4 inputcard">
      <div className="card text-center inputcard">
        <div className="card-body inputcard">
          <div className="card-content inputcard">
            <div className="row-container inputcard">
              <input
                type="text"
                className="title-inputfield inputcard"
                placeholder="Enter Title..."
                value={title}
                onChange={handleTitleChange}
              />
              <button onClick={saveTask}>
                  <i className="bi bi-floppy2-fill save-icon inputcard" title="Save Task"></i>
              </button>

            </div>
            
            {/* Label Input */}
            <div className="row-container inputcard">
              <input
                type="text"
                className="label-inputfield inputcard"
                placeholder="Enter Label"
                value={label}
                onChange={handleLabelChange}
              />
            </div>

            {/* Due Date Input */}
            <div className="row-container inputcard">

                <div className='row-due-date-container inputcard'>
                    <div className="due-date inputcard">Due</div>
                    <input
                        type="date"
                        className="due-date-inputfield inputcard"
                        placeholder='Add'
                        value={dueDate}
                        onChange={handleDueDateChange}
                    />
                </div>

              <button onClick={cancelTaskCreation}>
                  <i className="bi bi-x-square-fill card-icon inputcard" title="Cancel Task Creation"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCard;
