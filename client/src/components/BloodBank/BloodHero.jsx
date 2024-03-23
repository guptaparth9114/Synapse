import React from 'react';

const BloodHero = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <img src="assets/bb2.jpg" alt="" className="w-[90%] h-[100%] mx-20 shadow-lg pt-[72px] relative" />
        <div className="absolute top-[20%] left-[10%] right-0 bg-transparent p-4 text-center">
        <p className="text-xl font-bold text-red-600">"Finding a blood bank is the first step towards saving lives."</p>
      </div>
        <div className="absolute top-[30%] left-[45%] bg-red-600 px-10 py-8 rounded-lg shadow-md mb-4 ">
        <h2 className="text-xl font-semibold">Request Blood</h2>
        <form>
          <div className="mb-2">
            <label htmlFor="bloodUnits" className="block text-sm font-medium text-white">Units of Blood</label>
            <input type="number" id="bloodUnits" name="bloodUnits" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="city" className="block text-sm font-medium text-white">City</label>
            <input type="text" id="city" name="city" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="state" className="block text-sm font-medium text-white">State</label>
            <input type="text" id="state" name="state" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-2">
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-white">Blood Group</label>
            <input type="text" id="bloodGroup" name="bloodGroup" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button type="submit" className="bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Submit</button>
        </form>
      </div>
     
      </div>
    </div>
  );
};

export default BloodHero;
