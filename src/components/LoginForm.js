import React, { useState } from 'react';

import './LoginForm.css';

// TODO: excepted props: login function

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-form">
      <p>Login to our magic portal</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    </div>
  );
};

export default LoginForm;
