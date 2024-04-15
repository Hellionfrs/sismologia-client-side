import React from "react";
import Navigation from "../Navigation";
import ItemList from "../ItemList";
// import ItemList from "./components/ItemList";
// import ItemDetail from "./components/ItemDetail";
// import FilterForm from "./components/FilterForm";

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <ItemList />
    </div>
  );
}

export default App;
