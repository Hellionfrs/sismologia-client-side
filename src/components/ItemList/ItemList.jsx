import React, { useState, useEffect } from "react";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Aquí realizarías la solicitud GET al backend de Rails para obtener la lista de elementos
    fetch(import.meta.env.VITE_API_BACKEND)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.features);
        setItems(data.features);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []); // Esto se ejecutará solo una vez, al cargar el componente

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.place}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
