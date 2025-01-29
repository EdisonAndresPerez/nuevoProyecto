import React from "react";

import Navbar from "../../Components/Navbar";
import Favorites from "../favorite/Favorites";
import Contacts from "../contacts/Contacts";

export default function Overview() {
  return (
    <div className="bg-bg_pagina min-h-screen">
      <Navbar />
      <Favorites />
      <Contacts />
    </div>
  );
}
