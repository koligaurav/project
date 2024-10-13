import React from 'react';
import { Link } from 'react-router-dom';
import user_icon from './Assets/person.png';



const Header = () => {
  return (
    <header className="app-header">
      <h1>Your Application Title</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login-signup">
              <img src={user_icon} alt="Login/Signup" style={{ width: '30px', height: '30px' }} />
            </Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
