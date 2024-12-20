import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MixLab.css'; 

import SearchBar from '../Navigation/SearchBar';
import TitledMixCard from '../MixLab/TitledMixCard';
import SelectionPanel from './SelectionPanel';
import InputMixCard from './InputMixCard';

import axios from 'axios';

const MixLab = () => {
    const [beats, setBeats] = useState([]);
    const [sounds, setSounds] = useState([]);
    const [selectedBeat, setSelectedBeat] = useState(null);
    const [selectedSound, setSelectedSound] = useState(null);
    

    const handleBeatSelection = (beat) => setSelectedBeat(beat);
    const handleSoundSelection = (sound) => setSelectedSound(sound);

    useEffect(() => {
        const fetchBeatsAndSounds = async () => {
            try {
                const beatsResponse = await axios.get("http://localhost:5000/api/beats", { withCredentials: true });
                const soundsResponse = await axios.get("http://localhost:5000/api/sounds", { withCredentials: true });
    
                // Update beats with the full URL for the audio path
                const updatedBeats = beatsResponse.data.map((beat) => ({
                    ...beat,
                    audioPath: `http://localhost:5000/audio/beat/${beat.audioPath}`, // Append the URL for beats
                }));
    
                // Update sounds with the full URL for the audio path
                const updatedSounds = soundsResponse.data.map((sound) => ({
                    ...sound,
                    audioPath: `http://localhost:5000/audio/sound/${sound.audioPath}`, // Append the URL for sounds
                }));
                
                setBeats(updatedBeats);
                setSounds(updatedSounds);
    
                console.log("Fetched Beats:", updatedBeats);
                console.log("Fetched Sounds:", updatedSounds);
            } catch (error) {
                console.error("Error fetching beats or sounds:", error);
            }
        };
    
        fetchBeatsAndSounds();
    }, []);
    

    
    const [newBeatQuery, setNewBeatQuery] = useState("");
    const [newSoundQuery, setNewSoundQuery] = useState("");

    const handleNewBeatQuery = (e) => setNewBeatQuery(e.target.value);
    const handleNewSoundQuery = (e) => setNewSoundQuery(e.target.value);

    const createMix = async () => {
        try {
            if (!selectedBeat || !selectedSound) {
                alert("Please select a beat and a sound.");
                return;
            }
    
            const response = await axios.post(
                'http://localhost:5000/api/create_mix',
                {
                    beatPath: selectedBeat.audioPath,
                    soundPath: selectedSound.audioPath,
                },
                { withCredentials: true } // No need to receive audio as a blob
            );
    
            // Handle success response
            alert("Mix created successfully! Mix ID: " + response.data.mix_id);
        
        } catch (error) {
            console.error("Mix creation failed:", error);
            alert("An error occurred while creating the mix. Please try again.");
        }
    };
    
    
        
    return ( 
        <div className='mixlab-inner-wrapper'>

            <h2 className='welcome-mixlab'> Welcome to <span className='beatopia-span'> MixLab </span> ! Choose a <span className='beatopia-span'> Beat </span>  then a <span className='beatopia-span'> Sound </span> </h2>

            <h2 className='welcome-beat-selection'> Let's start ! First, select a <span className='beatopia-span'> Beat </span> of your choice</h2>

            <SelectionPanel pool={beats} 
                            placeholder={"Search beats by name eg. lo-fi beat"}
                            newQuery={newBeatQuery}
                            handleNewQuery={handleNewBeatQuery}
                            onItemSelect={handleBeatSelection}
            />

            <h2 className='welcome-sound-selection'> Then, choose an ambient <span className='beatopia-span'> Sound </span> to mix with</h2>

            <SelectionPanel pool={sounds} 
                            placeholder={"Search sounds by name eg. waterfall sound"}
                            newQuery={newSoundQuery}
                            handleNewQuery={handleNewSoundQuery}
                            onItemSelect={handleSoundSelection}
            />

            <h2 className='welcome-mix-ready'> This is how your <span className='beatopia-span'> Mix </span> currently looks like : </h2>

            <div className='mix-panel'>

                <InputMixCard id="123"
                    initialTitle="My Mix"
                    beat={selectedBeat} // Ensure this is an object with required fields.
                    sound={selectedSound} // Same here.
                    index={1}/>

            </div>

            <button className='mix-submit-button' onClick={createMix}>Create Mix !</button>
                        
        </div>    
  );
};

export default MixLab;
