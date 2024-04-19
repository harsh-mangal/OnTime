import React from 'react';

const FounderCard = ({ name, story, imageUrl }) => {
    return (
        <div className="founder-card">
            <div className="founder-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="founder-info">
                <h2>{name}</h2>
                <p>{story}</p>
            </div>
        </div>
    );
};

export default FounderCard;
