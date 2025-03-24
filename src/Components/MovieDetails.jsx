import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "bffb2355"; // Replace with your OMDB API key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${movieId}`);
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong!");
      }
      setLoading(false);
    };
    fetchMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <h2>
          {movie.Title} ({movie.Year})
        </h2>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"}
          alt={movie.Title}
          className="movie-poster"
        />
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <Link to="/" className="btn">
          Back to Search
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const API_KEY = "bffb2355"; // Replace with your OMDB API key
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// function MovieDetails() {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await fetch(`${API_URL}&i=${movieId}`);
//         const data = await response.json();
//         if (data.Response === "True") {
//           setMovie(data);
//         } else {
//           setError(data.Error);
//         }
//       } catch (err) {
//         setError("Something went wrong!");
//       }
//       setLoading(false);
//     };
//     fetchMovie();
//   }, [movieId]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="movie-details">
//       <h2>
//         {movie.Title} ({movie.Year})
//       </h2>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignContent: "center",
//           width: "90rem",
//         }}
//       >
//         <img
//           src={movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"}
//           alt={movie.Title}
//         />
//       </div>
//       <p>
//         <strong>Plot:</strong> {movie.Plot}
//       </p>
//       <p>
//         <strong>Actors:</strong> {movie.Actors}
//       </p>
//       <p>
//         <strong>Director:</strong> {movie.Director}
//       </p>
//       <p>
//         <strong>Genre:</strong> {movie.Genre}
//       </p>
//       <Link to="/" className="btn">
//         Back to Search
//       </Link>
//     </div>
//   );
// }

// export default MovieDetails;
