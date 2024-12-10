import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useRef } from 'react'; 
import './MusicCard.css';

const MusicCard = ({ id, title, label, audioPath, index }) => {

    const [isSelected, setIsSelected] = useState(false); {/* to configure*/}
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);
    const audioSrc = audioPath;

    const selectMusic = () => {
        setIsSelected(!isSelected); 
        // inclusion in selection TO BE HANDLED
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    const previewMusic = () => {
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

  

  return (
    <div className="card text-center musiccard">
        <div className="card-body musiccard">
            <div className="card-content  musiccard">
                <div className="row-container musiccard">
                    <div className="card-title musiccard" title={title}>{title}</div>
                </div>
                
                <div className="row-container musiccard">
                    <div className="card-label musiccard">{label}</div>
                    <div className="empty-flexbox musiccard"></div> 
                </div>
                
                <div className="row-container musiccard">
                    <div className="empty-div musiccard"></div>
                    <div className='buttons-container musiccard'>

                        <button onClick={selectMusic} 
                            className={`${(isSelected) ? 
                                "selected-button musiccard" : "select-button musiccard"}`}
                            title={`${(isSelected) ? 
                                "Selected" : "Select This"}`}>
                            
                            {(isSelected ? "Selected" : "Select")}

                        </button>
                        
                        <button onClick={previewMusic}>
                            <i className={` bi ${isPlaying ? 'bi-pause-circle-fill' : 'bi-play-circle-fill'} toggle-preview-button musiccard`} 
                            title={`${isPlaying ? 'Pause Preview' : 'Play Preview'}`}>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <audio ref={audioRef} src={audioSrc} onEnded={handleAudioEnded}/>
    </div>
  );
};

export default MusicCard;
