import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllTheBooks.css';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchBooks = async () => {
      const genres = ['fantasy', 'history', 'horror', 'romance', 'scifi'];
      const promises = genres.map((genre) =>
        fetch(`/data/${genre}.json`).then((response) => response.json())
      );

      const results = await Promise.all(promises);
      const allBooks = results.flat();
      setBooks(allBooks);
      setFilteredBooks(allBooks);
    };

    fetchBooks();
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((book) => book.category === category));
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">I Nostri Libri</h1>
      <Form.Select
        aria-label="Select category"
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="mb-4"
      >
        <option value="all">All Categories</option>
        <option value="fantasy">Fantasy</option>
        <option value="history">History</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="scifi">Sci-Fi</option>
      </Form.Select>
      <Row  xs={1} md={2} lg={4} className="g-4">
        {filteredBooks.map((book) => (
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
