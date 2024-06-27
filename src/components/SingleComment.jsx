import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item>
      <p>{comment.comment}</p>
      <small>Rating: {comment.rate}/5</small>
    </ListGroup.Item>
  );
};

export default SingleComment;
