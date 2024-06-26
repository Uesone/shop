import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className={`h-100 ${selected ? 'selected' : ''}`} onClick={this.toggleSelected}>
        <Card.Img variant="top" src={book.img} alt={book.title} className="book-img" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${book.price}<br />
            <strong>Category:</strong> {book.category}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
