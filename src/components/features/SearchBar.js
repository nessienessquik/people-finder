import React from "react";

const SearchBar = () => (
  <form>
    <input
      className="filter-bar"
      type="text"
      name="filter"
      placeholder="Type a name..."
    />
  </form>
);

export default SearchBar;
