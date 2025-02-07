const SearchBar = ({ onSearch }) => {
      const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.search.value.trim();
        if (query) {
          onSearch(query);
        }
      };
    
      return (
        <form className="search-bar" onSubmit={handleSubmit}>
          <input type="text" name="search" placeholder="Search movies..." />
          <button type="submit">🔍 Search</button>
        </form>
      );
    };
    
    export default SearchBar;
    