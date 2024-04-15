import React from "react";
import { Link } from "react-router-dom";

function ItemDetail({ feature }) {
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden w-[300px] ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{feature.place}</div>
        <p className="text-gray-700 text-base">
          <strong>ID:</strong> {feature.id}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Magnitude:</strong> {feature.magnitude}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Time:</strong> {feature.time}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Is Tsunami:</strong> {feature.tsunami ? "Yes" : "No"}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Magnitude Type:</strong> {feature.mag_type}
        </p>
        <p className="text-gray-700 text-base truncate">
          <strong>Title:</strong> {feature.title}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Longitude:</strong> {feature.longitude}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Latitude:</strong> {feature.latitude}
        </p>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/features/${feature.id}`}
          className="inline-block w-full text-white text-center bg-gray-500 hover:bg-gray-700  hover:text-white py-1 px-2 rounded"
        >
          Watch comments
        </Link>
      </div>
    </li>
  );
}

export default ItemDetail;
