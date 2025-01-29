import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="h-24 w-full bg-bg_navbar border-b border-black flex justify-between items-center px-4 md:px-10">
        {/* Navegación */}
        <nav className="flex gap-4 text-xl text-white">
          <Link to="/overview" className="hover:text-gray-300">
            Overview
          </Link>
          <Link to="/contacts" className="hover:text-gray-300">
            Contacts
          </Link>
          <Link to="/favorite" className="hover:text-gray-300">
            Favorite
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/ruta/al/logo.png"
            alt="Logo de la página"
            className="h-12 w-auto"
          />
        </div>
      </header>
    </div>
  );
}
