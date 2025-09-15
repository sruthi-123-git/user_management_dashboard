// import React from 'react';

// const HomePage = () => (
//   <div className="p-4">
//     <h1 className="text-xl font-bold mb-4">Welcome to the User Management App</h1>
//     <p>Click on Dashboard to view the list of users.</p>
//   </div>
// );

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Welcome to the User Management App</h1>
    <p>Click on <Link to="/dashboard"> User Dashboard</Link> to view the list of users.</p>
  </div>
);

export default HomePage;
