// src/components/Login.js
import React, { useState } from 'react';
import logo from './assets/logo.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate ()

  const handleLogin = (e) => {
    e.preventDefault();
    // successful
    if (username === 'admin' && password === 'chatlib') {
     console.log('Login successful!');
     navigate('/dashboard')

    
      setError('');
    } else {
  // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <div className=" justify-center flex-1 items-center pl-28">
          <img src={logo} alt="" className='h-16 mb-4' />
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold p-3 rounded focus:outline-none hover:bg-yellow-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
