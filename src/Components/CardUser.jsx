import React, { useState } from "react";
import { User, Mail, Phone, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Favorite } from "@mui/icons-material";

export default function CardUser() {
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate(); // Hook para redirigir

  const toggleFavorite = (id) => {
    if (favorite.includes(id)) {
      // Si ya está en favoritos, lo removemos
      setFavorite(favorite.filter((favId) => favId !== id));
    } else {
      // Si no está en favoritos, lo agregamos
      setFavorite([...favorite, id]);
      // Redirigir a la página de favoritos
      navigate("/favorites");
    }
  };
  const cards = [
    {
      id: 1,
      name: "Edison Andrés Pérez Martínez",
      email: "edisonandresperezmartinez@gmail.com",
      phone: "+57 3222429973",
      location: "Ibague-Tolima",
      country: "Colombia",
      image:
        "https://i.redd.it/ss-still-my-favorite-link-which-one-is-your-favorite-and-why-v0-f6sw4p9nljdb1.jpg?width=1200&format=pjpg&auto=webp&s=7ed6ecf9307e8b0f4d601ea85f93747c946bf1fd",
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-3 m-3 w-[280px] transition-transform duration-300 hover:translate-y-[-10px]"
        >
          <img
            src={card.image}
            alt="Icono del usuario"
            className="rounded-full border-4 border-[#C1D72F] w-24 h-24"
          />
          <div className="flex flex-col items-center gap-2 mt-4 w-auto">
            <p className="text-sm flex items-center space-x-2">
              <User className="w-4 h-4 text-black" aria-label="User" />
              <span>{card.name}</span>
            </p>
            <p className="text-sm flex items-center">
              <Mail className="w-4 h-4 text-black mr-2" aria-label="Email" />
              <span>{card.email}</span>
            </p>
            <p className="text-sm flex items-center">
              <Phone className="w-4 h-4 text-black mr-2" aria-label="Phone" />
              <span>{card.phone}</span>
            </p>
            <p className="text-sm flex items-center">
              <Building2
                className="w-4 h-4 text-black mr-2"
                aria-label="Location"
              />
              <span>{card.location}</span>
            </p>
            <div className="flex">
              <p className="text-sm mr-2">🇨🇴</p>
              <p className="text-sm">{card.country}</p>
            </div>
          </div>
          <hr className="w-full my-4 border-black border-2" />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => toggleFavorite(card.id)} // Llama a toggleFavorite con el card.id
              className={`text-[#C1D72F] border border-[#C1D72F] rounded px-4 py-1 hover:bg-[#C1D72F] hover:text-white transition ${
                favorite.includes(card.id) ? "bg-[#C1D72F] text-white" : ""
              }`}
            >
              {favorite.includes(card.id) ? ( 
                <>
                  <Favorite /> Liked{" "}

                </>
              ) : (
                "Like"
              )}
            </button>
            <button className="text-red-500 border border-red-500 rounded px-4 py-1 hover:bg-red-500 hover:text-white transition">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
