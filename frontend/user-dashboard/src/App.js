import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetailsPage from './pages/UserDetailsPage';
import Header from './components/Header'; 
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
