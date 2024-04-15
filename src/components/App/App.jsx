import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
// import ItemList from "./components/ItemList";
// import ItemDetail from "./components/ItemDetail";
// import FilterForm from "./components/FilterForm";

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
