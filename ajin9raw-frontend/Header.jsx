import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white text-center p-4 text-2xl font-bold shadow">
  Ajin9raw 💡
</header>
  );
}

import { Link } from "react-router-dom";

<header className="...">
  <nav className="flex justify-center space-x-4">
    <Link to="/" className="text-white hover:underline">Accueil</Link>
    <Link to="/about" className="text-white hover:underline">À propos</Link>
  </nav>
</header>
