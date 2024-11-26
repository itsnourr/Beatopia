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
    <div className="card text-center mixcard">
        <div className="card-body mixcard">
            <div className='card-image mixcard'>
                <img src={`${process.env.PUBLIC_URL}/mix-cover.png`} alt="Card" />
            </div>
            <div className="card-content mixcard">

                <div>
                    <div className="card-detail mixcard" title={beat}><span className='span-emphasis mixcard'>B /</span> {beat}</div>
                </div>
                
                <div>
                    <div className="card-detail mixcard" title={sound}><span className='span-emphasis mixcard'>S /</span> {sound}</div>
                </div>

                <div className='row-container mixcard'> 
                    <button className="edit-mix-button mixcard" onClick={editMix} title='Edit Mix'>Edit Mix</button>               
                    <button className="play-now-button mixcard" onClick={playMix} title='Play Now'>Play Now</button>               
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default MixCard;
