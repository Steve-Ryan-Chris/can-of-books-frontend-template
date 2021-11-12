import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import Button from "react-bootstrap/Button";

export default class Header extends React.Component {

  handleClick = () => {
    this.props.handleLogout();
  }

  handleClickModal = () => {
    this.props.showModal();
  }

  render() {
    return (
      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          {/* if the user is logged in, render a navigation link to profile page */}
          {this.props.active_user && <NavItem><Link to="/books" className="nav-link">Books</Link></NavItem>}

          {this.props.active_user && <NavItem><Button variant="link" onClick={this.handleClickModal}>Add A Book</Button></NavItem>}
          {/* if the user is logged in, render a navigation link to profile page */}
          {this.props.active_user && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
          {/* if the user is logged in, render the `LogoutButton` */}
          {this.props.active_user && <NavItem><Link onClick={this.handleClick} to="/" className="nav-link">Logout</Link></NavItem>}
        </Navbar>
      
    )
  }
}
