import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ApiPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character") // ✅ URL correcta
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-white mt-10">Cargando personajes...</p>;
  }

  return (
    <div className="bg-[#202329] min-h-screen px-8 py-10">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-10">
        Personajes
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((char) => (
          <Link
            key={char.id}
            to={`/character/${char.id}`}
            className="bg-[#2d2f34] rounded-xl overflow-hidden shadow-lg shadow-green-500/20 hover:shadow-green-400/40 hover:scale-105 transition-all duration-300"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4 text-white">
              <h2 className="text-xl font-bold mb-2">{char.name}</h2>
              <p className="text-sm mb-1">
                <span className="font-semibold">Species:</span> {char.species}
              </p>
              <p
                className={`text-sm mt-2 px-2 py-1 rounded-full w-fit ${
                  char.status === "Alive"
                    ? "bg-green-600 text-white"
                    : char.status === "Dead"
                    ? "bg-red-600 text-white"
                    : "bg-gray-500 text-white"
                }`}
              >
                {char.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApiPage;
