import React from "react";

import BookFavoriteButton from "./BookFavoriteButton";

const Book = ({
  title,
  description,
  imgLocation,
  isFavorite,
  onFavoriteToggle,
}) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "2em" }}>
      <img className="card-img-top" src={imgLocation} alt={title}></img>
      <div className="card-body">
        <BookFavoriteButton
          isFavorite={isFavorite}
          onFavoriteToggele={onFavoriteToggle}
        />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Book;
