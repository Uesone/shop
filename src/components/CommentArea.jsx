import React, { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { Card } from 'react-bootstrap';

const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDE0NDdjMjM5YzAwMTUyZjRiNzciLCJpYXQiOjE3MTk0OTQwMTAsImV4cCI6MTcyMDcwMzYxMH0.HDvODFoV4yMhqH85L1oWSQLDBkI4kNIxCmZbJQP_ms4';

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    const { bookId } = this.props;
    try {
      const response = await fetch(`${API_URL}${bookId}`, {
        headers: {
          "Authorization": AUTH_TOKEN
        }
      });
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  addComment = async (newComment) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": AUTH_TOKEN
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const savedComment = await response.json();
        this.setState((prevState) => ({
          comments: [...prevState.comments, savedComment],
        }));
      } else {
        console.error('Error adding comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  render() {
    const { comments } = this.state;

    return (
      <Card className="comment-area mt-3">
        <Card.Body>
          <Card.Title className="mb-3">Comments</Card.Title>
          <CommentsList comments={comments} />
          <AddComment bookId={this.props.bookId} addComment={this.addComment} />
        </Card.Body>
      </Card>
    );
  }
}

export default CommentArea;
