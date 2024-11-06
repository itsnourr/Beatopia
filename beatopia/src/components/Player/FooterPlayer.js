import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import './FooterPlayer.css';

const FooterPlayer = ({trackName}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const editPressed = () => {};

  return (
    <div className='player-container' title={`Playing ${trackName}`}>
        
        <div className='name-stack'>
                <div className='player-text'>{trackName}</div>
                <div className='now-playing'>Now Playing</div>
        </div>

        <div className='icons'>

            <button onClick={editPressed}>
                <i className="bi bi-pencil-square edit-icon" title="Edit Mix"></i>
            </button>

            <button onClick={togglePlayPause}>
                <i className={` bi ${isPlaying ? 'bi-pause-circle' : 'bi-play-circle'} toggle-button`} 
                   title={`${isPlaying ? 'Pause Mix' : 'Resume Mix'}`}>

                </i>
            </button>
        </div>

        
    </div>
  );
};

export default FooterPlayer;
