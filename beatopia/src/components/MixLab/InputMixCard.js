import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import MixCard from './MixCard';
import './InputMixCard.css';

const InputMixCard = ({ id, initialTitle = '', beat, sound, index }) => {

    const [title, setTitle] = useState(initialTitle);
    // const [label, setLabel] = useState(initialLabel);
    // const [dueDate, setDueDate] = useState(initialDueDate);

    const handleTitleChange = (e) => setTitle(e.target.value);
    // const handleLabelChange = (e) => setLabel(e.target.value);
    // const handleDueDateChange = (e) => setDueDate(e.target.value);

    const [isPlaying, setIsPlaying] = useState(false);

    const previewMusic = () => {
        setIsPlaying(!isPlaying);
    };

    

  return (
    <div className='parent-wrapper inputmixcard'>
        <MixCard beat={beat} sound={sound} />
        <input
                type="text"
                className="mix-title-inputfield inputmixcard"
                placeholder="Enter Mix Name"
                value={title}
                onChange={handleTitleChange}
              />
    </div>
  );
};

export default InputMixCard;
