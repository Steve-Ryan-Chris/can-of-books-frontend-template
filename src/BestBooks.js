import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class BestBooks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  
  /* TODO: render user's books in a Carousel */
  render() {
    return (
      <>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    )
  }
}