import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";

const API_KEY = "bffb2355"; // Replace with your OMDB API key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={searchMovies}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
