import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Username:', username);
      console.log('Password:', password);

      navigate('/Home');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h4 style={{ marginBottom: '25px' }}>Login Form</h4>

        <label className="form-label">Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <p className="forgot-password">
          <a href="link_ka_url">I Forgot My Login Credentials</a>
        </p>

        <div className="login-button">
          <Link to="/Products">
            <Button type="submit" className="btn btn-primary">
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
