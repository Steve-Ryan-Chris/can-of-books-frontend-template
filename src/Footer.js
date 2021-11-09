import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Footer extends React.Component {
  
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}
