import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <img src={character.image} alt={character.name} className="rounded" />
      <h2 className="text-xl font-bold mt-2">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

export default CharacterCard;
