import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MyMixes.css'; 

import SearchBar from '../Navigation/SearchBar';
import TitledMixCard from '../MixLab/TitledMixCard';

const MyMixes = () => {

    const mixes = [
        {
            id: 1,
            title: "Study Beats",
            beat: "Chill rhythm",
            sound: "Chilled lo-fi"
        },
        {
            id: 2,
            title: "Morning Drive",
            beat: "Upbeat tempo",
            sound: "Energetic pop"
        },
        {
            id: 3,
            title: "Jazz Nights",
            beat: "Smooth jazz",
            sound: "Sax and piano"
        },
        {
            id: 4,
            title: "Indie Vibes",
            beat: "Guitar melodies",
            sound: "Soft indie"
        },
        {
            id: 5,
            title: "Deep House Grooves",
            beat: "Steady rhythm",
            sound: "House beats"
        },
        {
            id: 6,
            title: "Cinematic Mood",
            beat: "Atmospheric sound",
            sound: "Orchestral scores"
        },
        {
            id: 7,
            title: "Rock Classics",
            beat: "High energy",
            sound: "Electric guitars"
        }
    ];
    
    const [newMixQuery, setNewMixQuery] = useState("");

    const handleNewMixQuery = (e) => setNewMixQuery(e.target.value);
    
    return (
        <div className='settings-panel-container'>

            <h2 className='welcome-mixes'> Welcome to <span className='beatopia-span'> Mixes </span> ! What shall we listen to today?</h2>

            <div className='my-mixes-search-bar'>
                
                <SearchBar placeholder={"Search my mixes by name eg. lo-fi study mix"}
                            value={newMixQuery}
                            onChange={handleNewMixQuery}
                />

            </div>

            <div className='my-mixes-grid'>

                <div class="container">
                    <div class="row">

                        {mixes.length > 0 ? (
                                mixes.map((mix, index) => (
                                    <div class="col-md-3 col-sm-6 col-12 mb-3">
                                        <TitledMixCard
                                            key={mix.id}
                                            id={mix.id}
                                            title={mix.title}
                                            beat={mix.beat}
                                            sound={mix.sound}
                                            index={index}
                                        />
                                    </div>
                                ))
                        ) : (
                            // placeholder for empty mixes
                            <div>
                                No Mixes
                            </div>
                        )}

                    </div>
                </div>

            </div>

        </div>    
  );
};

export default MyMixes;
