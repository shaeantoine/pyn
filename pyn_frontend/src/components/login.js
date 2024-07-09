import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api-auth/login/', {
      username,
      password
    })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      axios.get('http://localhost:8000/api/users/', {
        headers: {
          'Authorization': `Token ${response.data.token}`
        }
      })
      .then(userResponse => {
        const userType = userResponse.data[0].profile.user_type;
        if (userType === 'EMPLOYEE') {
          navigate('/benefits');
        } else if (userType === 'TEAM_LEAD') {
          navigate('/team-benefits');
        } else if (userType === 'HR') {
          navigate('/all-benefits');
        }
      });
    })
    .catch(error => {
      console.error('There was an error logging in!', error);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
