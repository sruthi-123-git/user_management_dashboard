import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'; // Import the CSS file

const UserCard = ({ user }) => (
  <div className="user-card">
    <h2>
      <Link to={`/user/${user.id}`}>
        {user.name}
      </Link>
    </h2>
    <p>{user.email}</p>
  </div>
);

export default UserCard;
