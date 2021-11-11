import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';


export default class BestBooks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: NaN
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    let apiURL = `${process.env.REACT_APP_SERVER}/books/?email=${this.props.email}`;
    console.log(apiURL);
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
    console.log(this.state.books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookCarousel books={this.state.books}/>
      </>
    )
  }
}
