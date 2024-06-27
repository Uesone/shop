import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rate: '1',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { bookId, addComment } = this.props;
    const { comment, rate } = this.state;
    const newComment = { comment, rate, elementId: bookId };

    await addComment(newComment);
    this.setState({ comment: '', rate: '1' });
  };

  render() {
    const { comment, rate } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            name="comment"
            value={comment}
            onChange={this.handleInputChange}
            rows={3}
            required
          />
        </Form.Group>
        <Form.Group controlId="rate">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            name="rate"
            value={rate}
            onChange={this.handleInputChange}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Comment
        </Button>
      </Form>
    );
  }
}

export default AddComment;
