import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react'; 
import './MixCard.css';

const MixCard = ({ id, beat, sound, index }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const playMix = () => {
        setIsPlaying(!isPlaying);
    };

    const editMix = () => {};

  return (
    <div className="card text-center">
        <div className="card-body">
            <div className='card-image'>
                <img src={`${process.env.PUBLIC_URL}/mix-cover.png`} alt="Card" />
            </div>
            <div className="card-content">

                <div>
                    <div className="card-detail" title={beat}><span className='span-emphasis'>B /</span> {beat}</div>
                </div>
                
                <div>
                    <div className="card-detail" title={sound}><span className='span-emphasis'>S /</span> {sound}</div>
                </div>

                <div className='row-container'> 
                    <button className="edit-mix-button" onClick={editMix} title='Edit Mix'>Edit Mix</button>               
                    <button className="play-now-button" onClick={playMix} title='Play Now'>Play Now</button>               
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default MixCard;
