import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SelectionPanel.css';

import SearchBar from '../Navigation/SearchBar';
import MusicCard from '../MixLab/MusicCard';

const SelectionPanel = ({ pool, placeholder, newQuery, handleNewQuery, onItemSelect }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (item) => {
        setSelectedId(item.id); // Update selected item
        onItemSelect(item); // Notify parent of selection
    };

    // Filter the pool dynamically based on the search query
    const filteredPool = pool.filter((item) =>
        item.title.toLowerCase().includes(newQuery.toLowerCase())
    );

    return (
        <div className="settings-panel-container">
            {/* Search Bar */}
            <div className="my-mixes-search-bar">
                {/* <SearchBar
                    placeholder={placeholder}
                    value={newQuery}
                    onChange={handleNewQuery}
                /> */}
            </div>

            {/* Music Cards */}
            <div className="my-mixes-grid">
                <div className="container">
                    <div className="row">
                        {filteredPool.length > 0 ? (
                            filteredPool.map((item, index) => (
                                <div
                                    key={item.id} // Ensure each item has a unique key
                                    className="col-md-3 col-sm-6 col-12 mb-3"
                                >
                                    <MusicCard
                                        id={item.id}
                                        title={item.title}
                                        label={item.label}
                                        audioPath={item.audioPath}
                                        index={index}
                                        isSelected={item.id === selectedId} // Highlight selected card
                                        onSelect={() => handleSelect(item)} // Handle selection
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="empty-pool-message">
                                <p>No items to display. Try adjusting your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionPanel;
    