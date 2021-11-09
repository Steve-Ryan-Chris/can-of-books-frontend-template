import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Profile extends React.Component {

  render() {
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>User Info</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Username:</Card.Subtitle>
            <Card.Text>
              {this.props.username}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Email:</Card.Subtitle>
            <Card.Text>
              {this.props.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
};
