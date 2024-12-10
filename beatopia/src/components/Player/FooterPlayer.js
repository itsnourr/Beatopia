import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import './FooterPlayer.css';

const FooterPlayer = ({ trackName, audioPath, audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Effect to handle playing/pausing based on audioPath change
    useEffect(() => {
        // If the track changes, reset the play state and pause the audio
        setIsPlaying(false); // Reset the play state to paused
        if (audioRef.current) {
            audioRef.current.load();  // Load the new track
        }
    }, [audioPath]); // Trigger this effect when the audioPath changes

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
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
                       title={`${isPlaying ? 'Pause Mix' : 'Resume Mix'}`} />
                </button>
            </div>

            <audio ref={audioRef} src={audioPath} loop />
        </div>
    );
};

export default FooterPlayer;
