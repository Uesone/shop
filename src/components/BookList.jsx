import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('Books:', books);
  }, [books]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log('Search Term:', e.target.value);
  };

  const filteredBooks = books.filter(book => {
    const lowerCaseTitle = book.title.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCaseTitle.includes(lowerCaseSearchTerm);
  });

  console.log('Filtered Books:', filteredBooks);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4"
      />
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredBooks.map((book, index) => (
          <Col key={`${book.asin}-${index}`}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookList;
