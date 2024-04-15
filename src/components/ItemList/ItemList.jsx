import React, { useState, useEffect } from "react";
import FilterForm from "../FilterForm";
import ItemDetail from "../ItemDetail/ItemDetail";

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
    <div className="flex flex-col container mx-auto p-4 justify-center items-center gap-5">
      <h2 className="text-xl font-semibold mb-4">Items</h2>
      <FilterForm onSubmit={fetchData} magTypeList={magTypeList} />
      <ul className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <ItemDetail key={item.id}feature={item}/>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
