import React from 'react';
import { BrowserRouter as Router, Routes as RRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <Router>
      <RRoutes>
        <Route path="/" element={<Home />} />

      </RRoutes>
    </Router>
  );
};

export default Routes;
