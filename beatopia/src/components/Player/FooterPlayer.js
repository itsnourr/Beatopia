import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useRef } from 'react';
import './FooterPlayer.css';

const FooterPlayer = ({trackName, audioPath}) => {

    const audioRef = useRef(null);
    const audioSrc = audioPath;

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if(audioRef.current){
            if(isPlaying) {
                audioRef.current.pause();
            }
            else{
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
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

        <audio ref={audioRef} src={audioSrc} loop/>
        
    </div>
  );
};

export default FooterPlayer;
