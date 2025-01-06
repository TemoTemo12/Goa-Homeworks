import React from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();

  const players = [
    { id: '1', name: 'Messi', team: 'PSG' },
    { id: '2', name: 'Ronaldo', team: 'Al Nassr' },
    { id: '3', name: 'Neymar', team: 'Al Hilal' },
  ];

  const player = players.find((player) => player.id === id);

  return (
    <div className="player-detail">
      <h2>{player ? player.name : 'Player not found'}</h2>
      <p>Team: {player ? player.team : 'N/A'}</p>
    </div>
  );
};

export default Player;
