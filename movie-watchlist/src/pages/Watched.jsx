import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Watched = () => {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const storedWatched = JSON.parse(localStorage.getItem("watched")) || [];
    const uniqueMovies = Array.from(new Map(storedWatched.map(movie => [movie.imdbID, movie])).values());

    setWatched(uniqueMovies);
  }, []);

  const removeFromWatched = (movieId) => {
    const updatedWatched = watched.filter((movie) => movie.imdbID !== movieId);
    setWatched(updatedWatched);
    localStorage.setItem("watched", JSON.stringify(updatedWatched));
  };

  return (
    <div className="watched-container">
      <h2>Watched Movies</h2>
      {watched.length === 0 ? (
        <p>No watched movies.</p>
      ) : (
        <div className="watched-list">
          {watched.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie} 
              onDelete={() => removeFromWatched(movie.imdbID)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watched;
