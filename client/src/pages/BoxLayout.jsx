import React from 'react';

const BoxLayout = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-32 h-32 bg-red-300 rounded-lg p-4 hover:bg-red-600 hover:text-white hover:translate-up transition duration-300 ease-in-out cursor-pointer">
        <h3 className="mb-2 text-md font-semibold">Approved Camps</h3>
        <p id="approvedCamps" className="font-bold text-lg">0</p>
      </div>
      <div className="w-32 h-32 bg-red-300 rounded-lg p-4 hover:bg-red-600 hover:text-white hover:translate-up transition duration-300 ease-in-out cursor-pointer">
        <h3 className="mb-2 text-md font-semibold">Blood Units Collected</h3>
        <p id="bloodUnitsCollected" className="font-bold text-lg">0</p>
      </div>
      <div className="w-32 h-32 bg-red-300 rounded-lg p-4 hover:bg-red-600 hover:text-white hover:translate-up transition duration-300 ease-in-out cursor-pointer">
        <h3 className="mb-2 text-md font-semibold">Donors Registered</h3>
        <p id="donorsRegistered" className="font-bold text-lg">0</p>
      </div>
      <div className="w-32 h-32 bg-red-300 rounded-lg p-4 hover:bg-red-600 hover:text-white hover:translate-up transition duration-300 ease-in-out cursor-pointer">
        <h3 className="mb-2 text-md font-semibold">Blood Availability Search</h3>
      </div>
      <div className="w-32 h-32 bg-red-300 rounded-lg p-4 hover:bg-red-600 hover:text-white hover:translate-up transition duration-300 ease-in-out cursor-pointer">
        <h3 className="mb-2 text-md font-semibold">Blood Units Collected</h3>
        <p id="bloodUnitsCollected2" className="font-bold text-lg">0</p>
      </div>
    </div>
  );
};

export default BoxLayout;
