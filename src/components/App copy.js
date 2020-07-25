import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("books").get();
      setBooks(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default App;
