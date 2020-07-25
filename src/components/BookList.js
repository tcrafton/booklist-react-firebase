import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Book from "./Book";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("books").get();
      setBooks(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const onFavoriteToggleHandler = (book) => {
    console.log(book);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="row">
        {books
          .filter((rec) => {
            const targetString = `${rec.title}`.toLocaleLowerCase();
            return searchQuery.length === 0
              ? true
              : targetString.includes(searchQuery.toLocaleLowerCase());
          })
          .map((book) => (
            <Book
              key={book.id}
              {...book}
              onFavoriteToggle={() => onFavoriteToggleHandler(book)}
            />
          ))}
      </div>
    </div>
  );
};

export default BookList;
