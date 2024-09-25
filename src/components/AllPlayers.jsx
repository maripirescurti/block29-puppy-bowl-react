import React, { useState, useEffect } from 'react';
import { fetchPlayers } from '../API/';
import { useNavigate } from 'react-router-dom';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      const getPlayers = async () => {
        try {
          const data = await fetchPlayers();
          console.log(data);
          setPlayers(data.data || []);
        } catch (error) {
          console.error('Error fetching players:', error);
        }
      };
      getPlayers();
  }, []);

  return (
    <div>
      <h2>All Players</h2>
      {Array.isArray(players) && players.length > 0 ? (
        players.map((player) => (
          <div key={player.id} onClick={() => navigate(`/players/${player.id}`)}>
            <h4>{player.name}</h4>
          </div>
        ))
      ) : (
        <p>No players found.</p>
      )}
    </div>
  );
};
