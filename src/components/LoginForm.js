import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    props.onLogin(username);
  };
  // TODO: validation
  return (
    <div className="login-form">
      <p>Login to Our Magic Portal</p>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
