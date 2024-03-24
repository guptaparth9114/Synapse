

import React from 'react';
import { Link } from 'react-router-dom';

const BloodDirect = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Background image */}
      <img src="assets/bl.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full" />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-70  ">
        {/* Quotation */}
        <h1 className="text-white text-3xl font-bold mb-8 "><em>"The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you."</em></h1>

        {/* Button */}
        <Link to="/blood" className="bg-white text-black px-10 py-4 rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 border-4 border-yellow ">
         <h2 className="font-bold"> Visit Blood Bank portal </h2>
        </Link>
      </div>
    </div>
  );
};

export default BloodDirect;

