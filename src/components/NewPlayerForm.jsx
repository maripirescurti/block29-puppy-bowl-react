import React from "react";
import { createPlayer } from "../API";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewPlayerForm() {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPlayer({name, breed, imageUrl});
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Player Name"
        required
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Player Breed"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Player Image Url"
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};