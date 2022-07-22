// eslint-disable-next-line react/prop-types
export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        id="searchBar"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
