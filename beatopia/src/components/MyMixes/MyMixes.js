import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MyMixes.css'; 

import SearchBar from '../Navigation/SearchBar';
import TitledMixCard from '../MixLab/TitledMixCard';

const MyMixes = ({ updateFooterPlayer }) => {
    const [mixes, setMixes] = useState([]);  // State to store mixes
    const [newMixQuery, setNewMixQuery] = useState("");  // State for search query

    // Fetch mixes from the backend
    useEffect(() => {
        const fetchMixes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/get_mixes', {
                    withCredentials: true // If authentication is required
                });

                // Update mixes with the full URL for the audio path
                const updatedMixes = response.data.map((mix) => ({
                    ...mix,
                    audioPath: `http://localhost:5000/audio/mixes/${mix.audioPath}`, // Append the URL for mixes
                }));

                setMixes(updatedMixes);  // Set mixes in state
            } catch (error) {
                console.error("Failed to fetch mixes:", error);
            }
        };

        fetchMixes();
    }, []);  // Empty dependency array ensures this runs only once on mount

    const handleNewMixQuery = (e) => setNewMixQuery(e.target.value);

    return (
        <div className='settings-panel-container'>
            <h2 className='welcome-mixes'>
                Welcome to <span className='beatopia-span'> Mixes </span>! What shall we listen to today?
            </h2>

            <div className='my-mixes-search-bar'>
                <SearchBar
                    placeholder={"Search my mixes by name eg. lo-fi study mix"}
                    value={newMixQuery}
                    onChange={handleNewMixQuery}
                />
            </div>

            <div className='my-mixes-grid'>
                <div className="container">
                    <div className="row">
                        {mixes.length > 0 ? (
                            mixes.map((mix) => (
                                <div className="col-md-3 col-sm-6 col-12 mb-3" key={mix.id}>
                                    <TitledMixCard
                                        id={mix.id}
                                        title={mix.title}
                                        beat={mix.beat}
                                        sound={mix.sound}
                                        audioPath={mix.audioPath}  // Use the updated audioPath with full URL
                                        updateFooterPlayer={updateFooterPlayer}
                                    />
                                </div>
                            ))
                        ) : (
                            <div>No Mixes</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyMixes;
