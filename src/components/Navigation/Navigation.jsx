import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">
          Home
        </Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
}

export default Navigation;
