import React from 'react';
import { Link } from 'react-router-dom';

const HostCamp = () => {
  return (
    <div className="flex justify-center items-center h-screen mt-20">
      {/* Left Section */}
      <div className="w-1/2 flex justify-center items-center">
        <img src="../assets/download.jpg" alt="Blood Camp" className="w-80" />
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-center mb-4 mr-20">"Donate blood and be the reason for someone's existence."</p>
        <div className= "mr-20">
        <Link to="/host-blood-bank" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg">Host a Blood Camp</Link>
        </div>
      </div>
    </div>
  );
};

export default HostCamp;
