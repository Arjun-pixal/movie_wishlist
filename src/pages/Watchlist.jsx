import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);
  }, []);

  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const markAsWatched = (movie) => {
    removeFromWatchlist(movie.imdbID);
    const watched = JSON.parse(localStorage.getItem("watched")) || [];
    localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  };

  return (
    <div className="watchlist-container">
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? <p>No movies in watchlist.</p> : (
        <div className="watchlist-list">
          {watchlist.map((movie) => (
            <MovieCard 
              key={movie.imdbID} 
              movie={movie} 
              onMarkAsWatched={markAsWatched} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
