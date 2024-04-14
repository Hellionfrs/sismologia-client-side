import React, { useState } from "react";

function FilterForm({ onSubmit, magTypeList  }) {
  const [filters, setFilters] = useState({
    mag_type: "",
    page: "",
    per_page: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Magnitude Type:
        <select
          name="mag_type"
          value={filters.mag_type}
          onChange={handleChange}
        >
          <option value="">All</option>
          {magTypeList.map((magType) => (
            <option key={magType} value={magType}>
              {magType}
            </option>
          ))}
        </select>
      </label>
      <label>
        Page:
        <input
          type="number"
          name="page"
          value={filters.page}
          onChange={handleChange}
        />
      </label>
      <label>
        Per Page:
        <input
          type="number"
          name="per_page"
          value={filters.per_page}
          onChange={handleChange}
          min="1"
          max="1000" // ajustar el valor máximo según tus necesidades
        />
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default FilterForm;
