import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"}
        alt={movie.Title}
        className="card-img"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="card-text">
          <strong>Type:</strong> {movie.Type}
        </p>
        <Link to={`/movie/${movie.imdbID}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
