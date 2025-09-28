import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1e1f23] text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link 
        to="/" 
        className="text-2xl font-extrabold tracking-wider text-green-400 hover:text-green-300 transition-colors duration-200"
      >
        Rick & Morty API
      </Link>
      <div className="flex gap-8 text-lg">
        <Link 
          to="/api" 
          className="hover:text-green-400 transition-colors duration-200"
        >
          Ver API
        </Link>
        <a 
          href="https://rickandmortyapi.com/documentation" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-green-400 transition-colors duration-200"
        >
          Docs
        </a>
        <a 
          href="https://rickandmortyapi.com/about" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-green-400 transition-colors duration-200"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
