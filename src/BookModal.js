import { Component } from 'react';
import BookForm from './BookForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class BookModal extends Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new book?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <BookForm email={this.props.email} handlePostBook={this.props.handlePostBook} hideModal={this.props.hideModal}/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}