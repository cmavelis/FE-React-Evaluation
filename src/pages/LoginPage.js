import React from 'react';
import {
  Link,
} from 'react-router-dom';

import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div>
        Login Page
        <LoginForm />
        <button type="button">
          <Link to="/">Login</Link>
        </button>
      </div>
    );
  }
}

export default LoginPage;
