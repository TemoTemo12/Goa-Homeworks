import React from 'react';

const SeahorseDetails = ({ match }) => {
    const { id } = match.params;

    return (
        <div>
            <h1>Seahorse Details</h1>
            <p>Details for Seahorse ID: {id}</p>
        </div>
    );
};

export default SeahorseDetails;
