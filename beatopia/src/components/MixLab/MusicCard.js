import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import './MusicCard.css';

const MusicCard = ({ id, title, label, index }) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const selectMusic = () => {
        setIsSelected(!isSelected); 
        // inclusion in selection TO BE HANDLED
    };

    const previewMusic = () => {
        setIsPlaying(!isPlaying);
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
    </div>
  );
};

export default MusicCard;
