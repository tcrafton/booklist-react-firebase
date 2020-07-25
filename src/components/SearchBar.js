import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="col-md-6">
      <input
        id="bookTitle"
        className="col-md-12"
        type="text"
        placeholder="Search by book title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
