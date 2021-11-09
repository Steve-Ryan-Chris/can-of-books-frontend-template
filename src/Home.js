import React from 'react';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';

export default class Home extends React.Component {

  handleClick = () => {
    this.props.handle_login_attempt();
  }

  render() {
    return (
      <>
        {/* To Do: insert home page filler image */}
        {!(this.props.active_user) && <Button onClick={this.handleClick}>Log In</Button>}
        {this.props.loginAttempt && <LoginForm loginHandler={this.props.loginHandler}/>}
      </>
    )
  }
}