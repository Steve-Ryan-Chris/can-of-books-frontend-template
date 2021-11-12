import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";


export default class Book extends React.Component {
  handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`${process.env.REACT_APP_SERVER}/books/${id}?email=${this.props.email}`);
    // this.props.reload();
  };

  render() {
    console.log(this.props.info._id)
    return (
      <>
        <img
          className="d-block w-100"
          src="https://trumpwallpapers.com/wp-content/uploads/Book-Wallpaper-03-3840-x-2400.jpg"
          alt={this.props.info.title}
        />
        <Carousel.Caption>
          <h1>{this.props.info.title}</h1>
          <h4>{this.props.info.description}</h4>
          <Button
            variant="danger"
            onClick={() => this.handleDelete(this.props.info._id)}
          >
            Delete
          </Button>
        </Carousel.Caption>
      </>
    );
  }
}

