import React from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {
  return (
    <div>
      <h1>Teams</h1>
      <p>Click on a player to learn more about them:</p>
      <ul className="team-list">
        <li><Link to="/teams/1">Messi (PSG)</Link></li>
        <li><Link to="/teams/2">Ronaldo (Al Nassr)</Link></li>
        <li><Link to="/teams/3">Neymar (Al Hilal)</Link></li>
      </ul>
    </div>
  );
};

export default Teams;
