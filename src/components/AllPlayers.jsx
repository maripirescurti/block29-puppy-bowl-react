import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../API/';
import { useNavigate } from 'react-router-dom';
// import '../App.css'

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
      const getPlayers = async () => {
        try {
          const data = await fetchPlayers();
          console.log(data);
          setPlayers(data.data.players);
        } catch (error) {
          console.error('Error fetching players:', error);
        }
      };
      getPlayers();
  }, []);

  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className='players-container'> 
      <h2>All Players</h2>
      <input 
        type="text" 
        placeholder='Search players by name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className='search-bar'
      />
      <div className='players-grid'>
      {Array.isArray(filteredPlayers) && filteredPlayers.length > 0 ? (
        filteredPlayers.map((player) => (
          <div 
            key={player.id} 
            className='player-card'
            onClick={() => navigate(`/players/${player.id}`)}
          >
            <img src={player.imageUrl} alt={player.name} className='player-image' />
            <h4>{player.name}</h4>
            <p>Breed: {player.breed}</p>
          </div>
        ))
      ) : (
        <p>No players found.</p>
      )}
      </div>
    </div>
  );
};
