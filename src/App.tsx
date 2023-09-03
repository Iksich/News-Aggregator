import React from 'react';
import './App.css';
import { Home } from './components/Home';

export const App: React.FC = () => {
  return (
    <div className="App">
      {
        <div>
          <Home pageTitle={''}/>
        </div>
      }
    </div>
  );
};
