const WatchlistButton = ({ movie, watchlist, setWatchlist }) => {
  const isAdded = watchlist.some((m) => m.imdbID === movie.imdbID);

  const toggleWatchlist = () => {
    if (isAdded) {
      setWatchlist(watchlist.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <button onClick={toggleWatchlist}>
      {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
};

export default WatchlistButton; 

