

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllTheBooks.css';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const genres = ['fantasy', 'history', 'horror', 'romance', 'scifi'];
      const promises = genres.map((genre) =>
        fetch(`/data/${genre}.json`).then((response) => response.json())
      );

      const results = await Promise.all(promises);
      setBooks(results.flat());
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">All The Books</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {books.map((book) => (
          <Col key={book.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} className="book-img" />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${book.price}<br />
                  <strong>Category:</strong> {book.category}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllTheBooks;





