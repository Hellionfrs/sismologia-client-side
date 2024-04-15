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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-[300px] md:w-[600px]">
      <label className="block mb-4">
        <span className="text-gray-700">Magnitude Type:</span>
        <select
          name="mag_type"
          value={filters.mag_type}
          onChange={handleChange}
          className="block w-full mt-1 rounded-md px-2 py-1 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">All</option>
          {magTypeList.map((magType) => (
            <option key={magType} value={magType}>
              {magType}
            </option>
          ))}
        </select>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Page:</span>
        <input
          type="number"
          name="page"
          value={filters.page}
          onChange={handleChange}
          className="block w-full mt-1 px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Per Page:</span>
        <input
          type="number"
          name="per_page"
          value={filters.per_page}
          onChange={handleChange}
          min="1"
          max="1000"
          className="block w-full mt-1 px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Apply Filters
      </button>
    </form>
  );
}

export default FilterForm;
