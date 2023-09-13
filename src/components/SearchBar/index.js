function SearchBar({ inStockOnly, filterText, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
