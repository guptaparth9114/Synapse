// FourPartsLayout.js
import React from 'react';

const FourPartsLayout = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="bg-red-400 p-4 flex justify-center items-center" style={{ height: '25vh' }}>
        <h1 className="text-white font-mono text-5xl"><em>FIND BLOOD BANK</em></h1>
      </div>
      <div className="bg-white p-4 flex flex-col justify-center items-center" style={{ height: '25vh' }}>
        <h2 className="text-2xl font-mono mb-4"><em>Want to Donate??</em></h2>
        <div className="flex justify-between w-full">
          <button className="bg-red-400 border border-red-700 p-4 cursor-pointer hover:bg-red-600 text-white flex-1 square-button">Things to make sure before donating</button>
          <button className="bg-red-400 border border-red-700 p-4 cursor-pointer hover:bg-red-600 text-white flex-1 square-button ml-4">Book Slot for donating</button>
        </div>
      </div>
      <div className="bg-white p-4 flex flex-col justify-center items-center" style={{ height: '25vh' }}>
        <h2 className="text-2xl font-mono mb-4"><em>Want to Host??</em></h2>
        <div className="flex justify-between w-full">
          <button className="bg-red-400 border border-red-700 p-4 cursor-pointer hover:bg-red-600 text-white flex-1 square-button">Requirement for hosting</button>
          <button className="bg-red-400 border border-red-700 p-4 cursor-pointer hover:bg-red-600 text-white flex-1 square-button ml-4">Add details for hosting</button>
        </div>
      </div>
      <div className="bg-red-400 p-4 flex justify-center items-center" style={{ height: '25vh' }}>
        <h1 className="text-white font-mono text-2xl"><em>BE A VOLUNTEER HELP IN HOSTING BLOOD DONATION CAMPS</em></h1>
      </div>
    </div>
  );
};

export default FourPartsLayout;
