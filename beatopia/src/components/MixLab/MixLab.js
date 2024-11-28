import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MixLab.css'; 

import SearchBar from '../Navigation/SearchBar';
import TitledMixCard from '../MixLab/TitledMixCard';
import SelectionPanel from './SelectionPanel';
import InputMixCard from './InputMixCard';

const MixLab = () => {

    const beats = [
        {
            id: 1,
            title: "Study Beats",
            label: "Chilled lo-fi"
        },
        {
            id: 2,
            title: "Morning Drive",
            label: "Energetic pop"
        },
        {
            id: 3,
            title: "Jazz Nights",
            label: "Sax and piano"
        },
        {
            id: 4,
            title: "Indie Vibes",
            label: "Soft indie"
        },
        {
            id: 5,
            title: "Deep House Grooves",
            label: "House beats"
        },
        {
            id: 6,
            title: "Cinematic Mood",
            label: "Orchestral scores"
        },
        {
            id: 7,
            title: "Rock Classics",
            label: "Electric guitars"
        }
    ];

    const sounds = [
        {
            id: 1,
            title: "Study Beats",
            label: "Chilled lo-fi"
        },
        {
            id: 2,
            title: "Morning Drive",
            label: "Energetic pop"
        },
        {
            id: 3,
            title: "Jazz Nights",
            label: "Sax and piano"
        },
        {
            id: 4,
            title: "Indie Vibes",
            label: "Soft indie"
        },
        {
            id: 5,
            title: "Deep House Grooves",
            label: "House beats"
        },
        {
            id: 6,
            title: "Cinematic Mood",
            label: "Orchestral scores"
        },
        {
            id: 7,
            title: "Rock Classics",
            label: "Electric guitars"
        }
    ];
    
    const [newBeatQuery, setNewBeatQuery] = useState("");
    const [newSoundQuery, setNewSoundQuery] = useState("");

    const handleNewBeatQuery = (e) => setNewBeatQuery(e.target.value);
    const handleNewSoundQuery = (e) => setNewSoundQuery(e.target.value);

    const createMix = () => {};
        
    return ( 
        <div className='mixlab-inner-wrapper'>

            <h2 className='welcome-mixlab'> Welcome to <span className='beatopia-span'> MixLab </span> ! Choose a <span className='beatopia-span'> Beat </span>  then a <span className='beatopia-span'> Sound </span> </h2>

            <h2 className='welcome-beat-selection'> Let's start ! First, select a <span className='beatopia-span'> Beat </span> of your choice</h2>

            <SelectionPanel pool={beats} 
                            placeholder={"Search beats by name eg. lo-fi beat"}
                            newQuery={newBeatQuery}
                            handleNewQuery={handleNewBeatQuery}
            />

            <h2 className='welcome-sound-selection'> Then, choose an ambient <span className='beatopia-span'> Sound </span> to mix with</h2>

            <SelectionPanel pool={sounds} 
                            placeholder={"Search sounds by name eg. waterfall sound"}
                            newQuery={newSoundQuery}
                            handleNewQuery={handleNewSoundQuery}
            />

            <h2 className='welcome-mix-ready'> This is how your <span className='beatopia-span'> Mix </span> currently looks like : </h2>

            <div className='mix-panel'>

                <InputMixCard beat={"My Beat"} sound={"My Sound"}/>

            </div>

            <button className='mix-submit-button' onClick={createMix}>Create Mix !</button>
                        
        </div>    
  );
};

export default MixLab;
