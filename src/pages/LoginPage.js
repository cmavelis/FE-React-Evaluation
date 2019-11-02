import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { login } from '../reducers/user';

import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { onLogin } = this.props;
    return (
      <div>
        Login Page
        <LoginForm
          onLogin={onLogin}
        />
        <button type="button">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
