import React from "react";

const BookFavoriteButton = ({ isFavorite, onFavoriteToggele }) => {
  return (
    <div
      className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={onFavoriteToggele}
    ></div>
  );
};

export default BookFavoriteButton;
