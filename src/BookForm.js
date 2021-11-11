import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class BookCarousel extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handlePostBook({
        title: event.target.title.value,
        description: event.target.description.value,
        status: event.target.status.value,
        email: this.props.email,
    })
}

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Enter book title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Enter book description" />
        </Form.Group>
                

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="name" placeholder="Read or unread?" />
        </Form.Group>
        
        <Button variant="primary" type="submit">submit</Button>
      </Form>
    )
  }
}

