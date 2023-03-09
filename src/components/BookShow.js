function BookShow({ book }) {
  return (
    <div className="mx-auto max-w-xl sm:px-6 lg:px-8 bg-violet-200 mb-2 mt-2">
      {book.title}
    </div>
  );
}

export default BookShow;
