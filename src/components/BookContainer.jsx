import React, { useEffect, useState } from 'react';
import BookList from './BookList';

const BookContainer = () => {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const genres = ["fantasy", "history", "horror", "romance", "scifi"];
      try {
        const promises = genres.map((genre) =>
          fetch(`/data/${genre}.json`).then((response) => {
            if (!response.ok) {
              throw new Error(
                `Failed to fetch ${genre} data: ${response.statusText}`
              );
            }
            return response.json();
          })
        );

        const results = await Promise.all(promises);
        const allBooks = results.flat();
        setBooks(allBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
        setFetchError(error.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">I Nostri Libri</h1>
      {fetchError ? (
        <div className="alert alert-danger">
          Error fetching books: {fetchError}
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default BookContainer;
