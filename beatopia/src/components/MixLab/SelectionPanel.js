import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SelectionPanel.css'; 

import SearchBar from '../Navigation/SearchBar';
import MusicCard from '../MixLab/MusicCard';

const SelectionPanel = ({ pool, placeholder, newQuery, handleNewQuery }) => {

    
    
    return (
        <div className='settings-panel-container'>

            <div className='my-mixes-search-bar'> 
                
                <SearchBar placeholder={placeholder}
                            value={newQuery}
                            onChange={handleNewQuery}
                />

            </div>

            <div className='my-mixes-grid'>

                <div class="container">
                    <div class="row">

                        {pool.length > 0 ? (
                                pool.map((item, index) => (
                                    <div class="col-md-3 col-sm-6 col-12 mb-3">
                                        
                                        <MusicCard
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            label={item.label}
                                            audioPath={item.audioPath}
                                            index={index}
                                        />
                                    </div>
                                ))
                        ) : (
                            // placeholder for empty pools
                            <div>
                                Nothing to display
                            </div>
                        )}

                    </div>
                </div>

            </div>

        </div>    
  );
};

export default SelectionPanel;
