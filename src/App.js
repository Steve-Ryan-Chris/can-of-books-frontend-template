import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import BestBooks from './BestBooks';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginAttempt: false,
      active_user: false,
      user_name: null,
      user_email: null
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

  render() {
    return (
      <>
        <Router>
          <Header active_user={this.state.active_user} handleLogout={this.handleLogout} />
          <Switch>

            {/* home screen route*/}
            <Route exact path="/">
              <Home active_user={this.state.active_user} handle_login_attempt={this.handle_login_attempt} 
              loginAttempt={this.state.loginAttempt} loginHandler={this.loginHandler}/>
            </Route >

            {/* books route*/}
            <Route path="/books">
              <BestBooks />
            </Route >

            {/* profile route*/}
            <Route path="/profile">
              <Profile username={this.state.user_name} email={this.state.user_email}/>
            </Route >

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
{/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Home` component */}