import React, { useState } from "react";

function FilterForm({ onSubmit }) {
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
        <input
          type="text"
          name="mag_type"
          value={filters.mag_type}
          onChange={handleChange}
        />
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
        />
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default FilterForm;
