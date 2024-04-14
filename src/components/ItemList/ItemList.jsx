import React, { useState, useEffect } from "react";
import FilterForm from "../FilterForm";

function ItemList() {
  const [items, setItems] = useState([]);
  const [magTypeList, setMagTypeList] = useState([])

  const fetchData = (filters) => {
    // Construye la URL con los parámetros de filtro y paginación
    let url = import.meta.env.VITE_API_BACKEND;
    const params = new URLSearchParams();
    if (filters.mag_type) params.append("mag_type", filters.mag_type);
    if (filters.page) params.append("page", filters.page);
    if (filters.per_page) params.append("per_page", filters.per_page);
    url += `?${params.toString()}`;
    console.log(url)
    // Realiza la solicitud fetch
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.features);
        console.log(data.mag_types)
        setMagTypeList(data.mag_types)
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  };

  useEffect(() => {
    fetchData({});
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <FilterForm onSubmit={fetchData} magTypeList={magTypeList} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.mag_type}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
