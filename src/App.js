import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import BestBooks from './BestBooks';
import Profile from './Profile';
import Modal from './BookModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginAttempt: false,
      active_user: false,
      user_name: null,
      user_email: null,
      modal: false,
    }
  }

  handle_login_attempt = () => {
    this.setState({
      loginAttempt: true
    });
  }

  loginHandler = (username, email) => {
    this.setState({
      loginAttempt: false,
      active_user: true,
      user_name: username,
      user_email: email
    })
  }

  handleLogout = () => {
    this.setState({
      active_user: false
    })
  }

  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = () => {
    this.setState({ modal: false })
  }

  handlePostBook = async (bookInfo) => {
    var newBookInfo = await axios.post(`${process.env.REACT_APP_SERVER}/books/?email=${this.state.user_email}`, bookInfo)
    var bookData = newBookInfo.data
    console.log(bookData);
  }

  render() {
    return (
      <>
        <Router>
          <Header active_user={this.state.active_user} handleLogout={this.handleLogout} showModal={this.showModal}/>
          <Switch>

            {/* home screen route*/}
            <Route exact path="/">
              <Home active_user={this.state.active_user} handle_login_attempt={this.handle_login_attempt} 
              loginAttempt={this.state.loginAttempt} loginHandler={this.loginHandler}/>
            </Route >

            {/* books route*/}
            <Route path="/books">
              <BestBooks email={this.state.user_email}/>
            </Route >

            {/* profile route*/}
            <Route path="/profile">
              <Profile username={this.state.user_name} email={this.state.user_email}/>
            </Route >

          </Switch>
          <Footer />
          <Modal hideModal={this.hideModal} showModal={this.state.modal} email={this.state.user_email} handlePostBook={this.handlePostBook}/>
        </Router>
      </>
    )
  }
}