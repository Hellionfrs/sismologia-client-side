import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FeaturePage() {
  const { id } = useParams();
  const [feature, setFeature] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BACKEND}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Feature not found");
        }
        return response.json();
      })
      .then((data) => {
        setFeature(data.feature);
        setComments(data.comments);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_BACKEND}/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: newComment }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error adding comment");
        }
        return response.json();
      })
      .then((data) => {
        setComments([data, ...comments]);
        setNewComment("");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  if (error) {
    return (
      <div className="max-w-md mx-auto text-black p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl mb-4">Error</h2>
        <p>{error}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 text-black  bg-white shadow-md rounded-md">
      <h2 className="text-2xl mb-4">Feature Detail</h2>
      {feature && (
        <div>
          <p>
            <strong>ID:</strong> {feature.id}
          </p>
          <p>
            <strong>External ID:</strong> {feature.external_id}
          </p>
          <p>
            <strong>Magnitude:</strong> {feature.magnitude}
          </p>
          <p>
            <strong>Place:</strong> {feature.place}
          </p>
          <p>
            <strong>Time:</strong> {new Date(feature.time).toLocaleString()}
          </p>
          <p>
            <strong>Tsunami:</strong> {feature.tsunami ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Mag Type:</strong> {feature.mag_type}
          </p>
          <p>
            <strong>Title:</strong> {feature.title}
          </p>
          <p>
            <strong>Longitude:</strong> {feature.longitude}
          </p>
          <p>
            <strong>Latitude:</strong> {feature.latitude}
          </p>
        </div>
      )}
      {comments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl mb-4">Comments</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-2 mb-2 rounded-md">
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl mb-4">Add Comment</h3>
        <form onSubmit={handleSubmitComment}>
          <textarea
            className="w-full text-white p-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows="4"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Comment
          </button>
        </form>
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default FeaturePage;
