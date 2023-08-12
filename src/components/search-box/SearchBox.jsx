import "./styles.css";

const SearchBox = ({ className, placeholder, handleSearch }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;
