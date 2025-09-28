import React, { useEffect, useState } from 'react';
import api from '../api/rickmorty';
import CharacterCard from '../components/CharacterCard';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`character/?page=${page}`)
      .then(res => setCharacters(res.data.results))
      .catch(err => console.log(err));
  }, [page]);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default Characters;
