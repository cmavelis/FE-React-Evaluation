import React, { useState } from 'react';

import './LoginForm.css';

// TODO: excepted props: login function

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <div className="login-form">
      <p>Login to Our Magic Portal</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
