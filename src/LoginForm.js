import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: ''
    }
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }   

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  } 
    
  handleClick = () => {
    this.props.loginHandler(this.state.username, this.state.email);
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" onChange={this.handleUsername} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmail}/>
          </Form.Group>

          <Button variant="primary" onClick={this.handleClick}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
};