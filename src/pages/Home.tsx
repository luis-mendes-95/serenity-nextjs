// src/pages/Home.tsx
import React from 'react';
import Header from '../components/header';
import Bowls from '../components/bowls';

const Home: React.FC = () => {
  return (
    <div style={{height:"100vh"}}>
      <Header/>
      <Bowls/>
    </div>
  );
};

export default Home;
