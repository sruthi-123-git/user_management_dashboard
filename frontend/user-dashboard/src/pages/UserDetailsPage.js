import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetailsPage.css'; // Import CSS file

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('Failed to fetch user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="user-details-container">Loading user details...</p>;
  if (!user) return <p className="user-details-container">User not found.</p>;

  return (
    <div className="user-details-container">
      <h1 className="user-details-title">{user.name}</h1>
      <p className="user-details-item"><strong>Email:</strong> {user.email}</p>
      <p className="user-details-item"><strong>Username:</strong> {user.username}</p>
      <p className="user-details-item"><strong>Phone:</strong> {user.phone}</p>
      <p className="user-details-item"><strong>Company:</strong> {user.company?.name}</p>
      <p className="user-details-item"><strong>Address:</strong> {user.address?.suite}, {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>

      <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
    </div>
  );
};

export default UserDetailsPage;
