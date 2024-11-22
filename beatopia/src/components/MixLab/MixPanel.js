import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import MixCard from './MixCard';
import './MixPanel.css';

const MixPanel = ({ id, title, beat, sound, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const playMix = () => {
        setIsPlaying(!isPlaying);
    };

    const editMix = () => {};

  return (
    <div className='parent-wrapper'>
        <MixCard beat={beat} sound={sound} />
        <h4 className='mix-title' title={title}>{title}</h4>
    </div>
  );
};

export default MixPanel;
