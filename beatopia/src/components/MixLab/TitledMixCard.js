import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import MixCard from './MixCard';
import './TitledMixCard.css';

const TitledMixCard = ({ id, title, beat, sound, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const playMix = () => {
        setIsPlaying(!isPlaying);
    };

    const editMix = () => {};

  return (
    <div className='parent-wrapper titledmixcard'>
        <MixCard beat={beat} sound={sound} />
        <h4 className='mix-title titledmixcard' title={title}>{title}</h4>
    </div>
  );
};

export default TitledMixCard;
