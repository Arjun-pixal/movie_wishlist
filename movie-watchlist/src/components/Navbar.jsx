import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🎬 Movie Watchlist</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/watched">Watched</Link>
      </div>
    </nav>
  );
};

export default Navbar;
