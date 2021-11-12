import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class BookCarousel extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const title= event.target.title.value;
    const description= event.target.description.value;
    let status= 'read'
    if (!event.target.read.checked) {
      status= 'unread'
    };
    const email= this.props.email;

    this.props.handlePostBook({title, description, status, email,});
}

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Enter book title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Enter book description" />
        </Form.Group>
                

        <Form.Group className="mb-3" controlId="status">
          <Form.Check
            type="radio"
            label="read"
            name="radio"
            id="read"
          />
          <Form.Check
          type="radio"
          label="unread"
          name="radio"
          id="unread"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">submit</Button>
      </Form>
    )
  }
}

