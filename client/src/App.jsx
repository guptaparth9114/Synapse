// App.js
import React from 'react';
import Navbar from './components/Navbar';
import FourPartsLayout from './pages/FourPartsLayout';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <FourPartsLayout />
      </div>
    </div>
  );
}

export default App;
