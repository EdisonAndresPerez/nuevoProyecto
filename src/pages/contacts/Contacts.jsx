import React from "react";
import CardUser from "../../Components/CardUser";
import Navbar from "../../Components/Navbar";

export default function Contacts() {
  return (
    <div>
      <div className="flex items-center space-x-4 mt-4">
        <h1 className="text-4xl p-10">Contacts</h1>
        <div className="flex-1 h-3 rounded-xl bg-black max-w-[1500px]"></div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <CardUser />
      </main>
    </div>
  );
}
