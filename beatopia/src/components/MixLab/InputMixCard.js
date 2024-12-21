import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react'; 
import MixCard from './MixCard';
import './InputMixCard.css';

const InputMixCard = ({ id, initialTitle = 'My Mix', beat, sound, index, onTitleChange }) => {
  // Local state for the title
  const [title, setTitle] = useState(initialTitle);

  // Ensure the local title is updated if the initialTitle prop changes
  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  // Handle title changes and propagate to the parent
  const handleTitleChange = (e) => {
    const updatedTitle = e.target.value;
    setTitle(updatedTitle);
    onTitleChange(updatedTitle); // Notify parent of the title change
  };

  // State to toggle play/stop preview
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
