import { useState } from "react";

const MovieCard = ({ movie, onAddToWatchlist, onMarkAsWatched, onDelete }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToWatchlist = () => {
    if (onAddToWatchlist) {
      onAddToWatchlist(movie);
      setShowNotification(true);

      // Hide notification after 2 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  return (
    <div className="movie-card">
      <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
      </a>

      {onAddToWatchlist && <button onClick={handleAddToWatchlist}>+ Watchlist</button>}
      {onMarkAsWatched && <button onClick={() => onMarkAsWatched(movie)}>✔ Mark as Watched</button>}
      {onDelete && <button onClick={onDelete} className="delete-button">🗑 Delete</button>}

      {/* Show notification when movie is added */}
      {showNotification && <div className="notification">✔ Added to Watchlist!</div>}
    </div>
  );
};

export default MovieCard;
