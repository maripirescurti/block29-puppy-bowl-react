import React, { useEffect, useState} from "react";
import { fetchPlayerById, deletePlayerById } from "../API";
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data.data);
    };
    fetchSinglePlayer();
  }, [id]);

  const handleDelete = async () => {
    await deletePlayerById(id);
    navigate('/');
  };

  return (
    <div>
      {player ? (
        <>
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
          <p>Age: {player.age}</p>
          <button onClick={handleDelete}>Delete Player</button>
        </>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>  
  );
};