import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

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

class Book extends Component {
  render() {
    console.log(this.props.info._id)
    console.log(this.props.info)
    return (
      <Carousel.Caption>
        <h1>{this.props.info.title}</h1>
      </Carousel.Caption>
    )
  }
}