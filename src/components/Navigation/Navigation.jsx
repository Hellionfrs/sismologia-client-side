import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-200 p-2 round-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold bg-blue-500 rounded-md py-1 px-2 hover:bg-blue-300">
          Home
        </Link>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
}

export default Navigation;
