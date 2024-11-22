import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import './MusicCard.module.css';

const MusicCard = ({ id, title, label, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const previewMusic = () => {
        setIsPlaying(!isPlaying);
    };

  const selectMusic = () => {};

  return (
    <div className="card text-center">
        <div className="card-body">
            <div className="card-content">
                <div className="row-container">
                    <div className="card-title" title={title}>{title}</div>
                </div>
                
                <div className="row-container">
                    <div className="card-label">{label}</div>
                    <div className="empty-flexbox"></div> 
                </div>
                
                <div className="row-container">
                    <div className="empty-div"></div>
                    <div className='buttons-container'>
                        <button className="select-button" onClick={selectMusic} title='Select This'>Select</button>
                        
                        <button onClick={previewMusic}>
                            <i className={` bi ${isPlaying ? 'bi-pause-circle-fill' : 'bi-play-circle-fill'} toggle-preview-button`} 
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
