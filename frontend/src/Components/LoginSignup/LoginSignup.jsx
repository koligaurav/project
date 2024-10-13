import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // Import your CSS file for styling
import Header from '../Header';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For signup

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log({ email, password, name, isLogin });
    
    // Redirect or handle authentication here
    alert(`Submitted: ${isLogin ? 'Login' : 'Signup'} - Email: ${email}, Password: ${password}, Name: ${name}`);
  };

  return (
    <div className="login-signup-container">
      <Header /> {/* Add Header here */}
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don’t have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
