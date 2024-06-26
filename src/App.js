import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
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
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
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
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
