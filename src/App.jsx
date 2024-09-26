import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        <Route path='/new-player' element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
};