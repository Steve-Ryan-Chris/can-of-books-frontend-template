import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";

var server = process.env.REACT_APP_SERVER;

export default class BestBooks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    let apiURL = `${server}/books/`;

    try {
      const bookResponse = await axios.get(apiURL);
      const books = bookResponse.data;
      this.setState({
        books,
      });
      console.log(books);
    } catch (error) {
      console.log("Error 404");
    }
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Carousel>
          {this.state.books ? (
            this.state.books.map((data, index) => (
              <Carousel.Item key={index}>
                <Book info={data}/>
              </Carousel.Item>
            ))
          ) : (
          <h1>Sorry this book is unavailable! Please search for another.</h1>
          ) 
          }
            
        </Carousel>
      </>
    )
  }
}

class Book extends React.Component {
  handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`${server}/books/${id}`);
    this.props.getBooks();
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
          {/* <Button
            variant="warning"
            onClick={() => this.props.handleUpdateBook(this.props.info._id)}
          >
            Update
          </Button> */}
        </Carousel.Caption>
      </>
    );
  }
}