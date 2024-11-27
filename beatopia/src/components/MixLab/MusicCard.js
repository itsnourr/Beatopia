import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import './MusicCard.css';

const MusicCard = ({ id, title, label, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const previewMusic = () => {
        setIsPlaying(!isPlaying);
    };

  const selectMusic = () => {};

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
                        <button className="select-button musiccard" onClick={selectMusic} title='Select This'>Select</button>
                        
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
