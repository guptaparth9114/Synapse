
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import EligibilityForm from '../BloodBank/EligibilityForm'; // Assuming you have created a component for the eligibility form

const DonateBlood = () => {
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);

  const handleCheckEligibility = () => {
    setShowEligibilityForm(true);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="w-[90%] h-full shadow-xl mx-20 bg-white flex pt-6 transition duration-300">
  <img src="assets/bd.jpg" alt="woman donating blood" className="w-[50%] h-[40%] p-6"/>
  <div className="flex flex-col justify-center items-center bg-white">
    <h1 className="text-red-600 h1-bold m-6 mt-10">Give the gift of life. Donate blood today and make a difference in someone's life</h1>
    <div className="flex">
      <button className="rounded-lg bg-red-600 hover:bg-red-800 text-white p-6 m-4 font-semibold">Check Your eligibility</button>
      <Link to="/donate-blood"><button className="rounded-lg bg-red-600 hover:bg-red-800 text-white p-6 m-4 font-semibold">Donate Blood Now</button></Link>
    </div>
  </div>
       
      </div>
      {showEligibilityForm && <EligibilityForm />}
    </div>
  );
};

export default DonateBlood;
