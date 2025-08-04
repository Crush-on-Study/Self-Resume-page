import React, { useState } from 'react';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleStart = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <IntroPage onStart={handleStart} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
