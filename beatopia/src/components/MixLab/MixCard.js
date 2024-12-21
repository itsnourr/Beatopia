import React, { useState } from 'react'; 
import './MixCard.css';

const MixCard = ({ beat, sound, title, audioPath, updateFooterPlayer }) => { 
    const [isPlaying, setIsPlaying] = useState(false);

    const loadMix = () => {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        updateFooterPlayer(title, audioPath, false);  // Update the footer player with the current mix
        console.log(audioPath)
      }
    };

    const deleteMix = () => {};

  return (
    <div className="card text-center mixcard">
        <div className="card-body mixcard">
            <div className='card-image mixcard'>
                <img src={`${process.env.PUBLIC_URL}/mix-cover.png`} alt="Card" />  
            </div>
            <div className="card-content mixcard">
                <div>
                    <div className="card-detail mixcard" title={beat && beat.title ? beat.title : ""}>
                        <span className='span-emphasis mixcard'>B /</span> {beat && beat.title ? beat.title : ""}
                    </div>
                </div>
                
                <div>
                    <div className="card-detail mixcard" title={sound && sound.title ? sound.title : ""}>
                        <span className='span-emphasis mixcard'>S /</span> {sound && sound.title ? sound.title : ""}
                    </div>
                </div>

                <div className='row-container mixcard'> 
                    {/* <button className="edit-mix-button mixcard" onClick={deleteMix} title='Delete Mix'>Delete Mix</button>                */}
                    <button className="play-now-button mixcard" onClick={loadMix} title='Play Now'>Load Mix</button>               
                </div>
            </div>
        </div>
    </div>
  );
};

export default MixCard;
