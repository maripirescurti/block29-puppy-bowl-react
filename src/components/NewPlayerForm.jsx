import React from "react";

export default function NewPlayerForm() {

  return (
    <div>
      <h2>New Player Form</h2>
      <form>
        <input type="text" placeholder="Player Name" />
        <button type="submit">Add Player</button>
      </form>
    </div>
  )
}