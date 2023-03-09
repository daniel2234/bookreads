import BookShow from "./BookShow";

function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div>
      {books.length > 0 && (
        <h1 className="text-3xl font-bold underline ml-2 mt-3">Book List</h1>
      )}

      {books.length > 0 && (
        <h3 className="ml-2">You have {books.length} unread books.</h3>
      )}
      {renderedBooks}
    </div>
  );
}

export default BookList;
