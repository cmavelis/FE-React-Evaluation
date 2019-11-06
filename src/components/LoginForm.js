import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import FormErrors from './FormErrors';
import './LoginForm.css';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: '', password: '' });

  const history = useHistory();

  const validateName = (value) => {
    const validate = /^([\w.%+-]+)$/.test(value);
    setNameValid(validate);
    setFormErrors({ ...formErrors, name: validate ? '' : 'Username uses invalid characters.' });
  };

  const validatePassword = (value) => {
    const validate = value.length >= 6;
    setPasswordValid(validate);
    setFormErrors({ ...formErrors, password: validate ? '' : 'Password must be at least 6 characters.' });
  };

  const handleLogin = () => {
    if (nameValid && passwordValid) {
      props.onLogin(username, nameValid);
      history.push('/home');
    }
  };

  const handleChange = (value, setFunction, validationFunction) => {
    setFunction(value);
    validationFunction(value);
  };

  const buttonClasses = `login-form-button ${nameValid && passwordValid ? '' : 'deactivated'}`;

  return (
    <div className="login-form">
      <p>Login to Our Magic Portal</p>
      <input
        type="text"
        value={username}
        onChange={(e) => handleChange(e.target.value, setUsername, validateName)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => handleChange(e.target.value, setPassword, validatePassword)}
        placeholder="Password"
      />
      <button
        type="button"
        onClick={handleLogin}
        className={buttonClasses}
      >
        LOGIN
      </button>
      <FormErrors formErrors={formErrors} />
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
