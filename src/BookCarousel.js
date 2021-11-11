import React from 'react';
import Book from './Book';
import Carousel from 'react-bootstrap/Carousel';

export default class BookCarousel extends React.Component {
  render() {
    return (
      <Carousel>
          {this.props.books.length ? (
            this.props.books.map((data, index) => (
              <Carousel.Item key={index}>
                <Book info={data}/>
              </Carousel.Item>
            ))
          ) : (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://trumpwallpapers.com/wp-content/uploads/Book-Wallpaper-03-3840-x-2400.jpg"
                alt="library"
              />
              <Carousel.Caption>
                <h1>Data base not detected.</h1>
                <h4>Please connect to database.</h4>
              </Carousel.Caption>
            </Carousel.Item>
          ) 
          }
            
        </Carousel>
    )
  }
}

