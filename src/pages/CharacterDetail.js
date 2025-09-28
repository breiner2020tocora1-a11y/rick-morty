import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams(); // toma el id desde la URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (loading) {
    return <p className="text-center text-white mt-10">Cargando personaje...</p>;
  }

  if (!character) {
    return <p className="text-center text-red-500 mt-10">No se encontró el personaje</p>;
  }

  return (
    <div className="bg-[#202329] min-h-screen flex justify-center items-center p-6">
      <div className="bg-[#2d2f34] rounded-xl shadow-lg overflow-hidden max-w-md w-full text-white">
        <img src={character.image} alt={character.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-green-400 mb-4">{character.name}</h1>
          <p><span className="font-semibold">Status:</span> {character.status}</p>
          <p><span className="font-semibold">Species:</span> {character.species}</p>
          <p><span className="font-semibold">Gender:</span> {character.gender}</p>
          <p><span className="font-semibold">Origin:</span> {character.origin?.name}</p>
          <p><span className="font-semibold">Location:</span> {character.location?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
