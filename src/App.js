import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router';
import './App.css'


function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
}

export default App;
