// src/App.tsx
import React from 'react';
import Routes from './Routes';
import GlobalStyle from './globalStyles';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle/>
    </>
  );
};

export default App;
