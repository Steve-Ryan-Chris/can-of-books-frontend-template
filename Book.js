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