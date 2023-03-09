import "./index.css";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [...books, { id: Math.random() * 9999, title }];
    setBooks(updateBooks);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline ml-2">Books To Read!</h1>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
