import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { login } from '../reducers/user';

import LoginForm from '../components/LoginForm';

import './LoginPage.css';
import logo from '../noinc_header.png';

const LoginPage = (props) => {
  const { onLogin } = props;
  return (
    <div className="login-page-card">
      <div className="login-logo-wrapper">
        <img src={logo} alt="NO.INC" className="login-logo" />
      </div>
      <div className="login-form-wrapper">
        <LoginForm
          onLogin={onLogin}
        />
      </div>
    </div>
  );
};

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
