export const fetchPlayers = async () => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players');
  if (!response.ok) {
      throw new Error('Failed to fetch players');
  }
  return response.json();
};

export const fetchPlayerById = async (id) => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players/${id}`);
  if (!response.ok) {
      throw new Error('Failed to fetch player');
  }
  return response.json();
};

export const createPlayer = async (player) => {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
  });
  if (!response.ok) {
      throw new Error('Failed to create player');
  }
  return response.json();
};

export const deletePlayerById = async (id) => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players/${id}`, {
      method: 'DELETE',
  });
  if (!response.ok) {
      throw new Error('Failed to delete player');
  }
  return response.json();
};
