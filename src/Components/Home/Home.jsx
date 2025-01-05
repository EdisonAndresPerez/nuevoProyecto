import React from 'react'
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>bienvenidos</h1>
      <p>pase pase pase pase pase</p>
      <Outlet />
    </div>
  )
}

export default Home;
