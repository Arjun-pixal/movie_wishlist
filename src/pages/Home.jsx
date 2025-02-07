import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMovies } from "../api/movieApi";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  const [query, setQuery] = useState("Marvel");
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const { data: movies = [], isLoading } = useQuery(["movies", query], () => fetchMovies(query));

  // ✅ Function to Add Movies to Watchlist
  const addToWatchlist = (movie) => {
    const isAlreadyInWatchlist = watchlist.some((item) => item.imdbID === movie.imdbID);
    if (!isAlreadyInWatchlist) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {isLoading ? <p>Loading...</p> : <MovieList movies={movies} onAddToWatchlist={addToWatchlist} />}
    </div>
  );
};

export default Home;
