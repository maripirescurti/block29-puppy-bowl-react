import React, { useEffect, useState} from "react";
import { fetchPlayerById, deletePlayerById } from "../API";
import { useParams, useNavigate } from "react-router-dom";


export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const data = await fetchPlayerById(id);
        setPlayer(data.data.player);  
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };
    fetchSinglePlayer();
  }, [id]);

  const handleDelete = async () => {
    await deletePlayerById(id);
    navigate('/');
  };

  if (!player) return <p>Loading...</p>

  return (
    <div className="single-player-container">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} className="single-player-image" />
      <p>Breed: {player.breed}</p>
      <button onClick={handleDelete}>Delete Player</button>
    </div>  
  );
};