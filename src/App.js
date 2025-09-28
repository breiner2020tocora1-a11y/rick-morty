import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApiPage from "./pages/ApiPage";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center text-white mt-10">Bienvenido</h1>} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/character/:id" element={<CharacterDetail />} /> {/* 👈 ruta dinámica */}
      </Routes>
    </Router>
  );
}

export default App;
