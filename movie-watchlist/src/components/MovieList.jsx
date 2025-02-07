import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAddToWatchlist }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onAddToWatchlist={onAddToWatchlist} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
