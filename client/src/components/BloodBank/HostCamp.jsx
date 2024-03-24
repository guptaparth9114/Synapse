import React from 'react';
import { Link } from 'react-router-dom';

const HostCamp = () => {
  return (
    // <div className="flex flex-col justify-center">
    // <div className="flex h-full mx-20 shadow-xl">
    // <div className="flex flex-col justify-center items-center">
    //     <p className="text-2xl font-bold text-center mb-4 mr-20">"Donate blood and be the reason for someone's existence."</p>
    //     <div className= "mr-20">
    //     <Link to="/host-blood-bank" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg">Host a Blood Camp</Link>
    //     </div>
    //   </div>
     
    //     <img src="assets/download.jpg" alt="Blood Camp" className="w-[60%] h-[50%]" />
  
    // </div>
    // </div>
    <div className="flex flex-col justify-center shadow-xl mt-10">
    <div className="w-[90%] h-full shadow-xl mx-20 bg-white flex pt-6 transition duration-300">
<div className="flex flex-col justify-center items-center bg-white">
  <h1 className="text-red-600 h1-bold m-6 mt-10">"Donate blood and be the reason for someone's existence."</h1>
  <Link to="/host-blood-bank"><button className="rounded-lg bg-red-600 hover:bg-red-800 text-white p-6 m-4 font-semibold">Host a Blood Donation Camp</button></Link>
</div>
<img src="assets/download.jpg" alt="blood donation camp hosting" className="w-[50%] h-[40%] p-6"/>
    </div>
  </div>
  );
};

export default HostCamp;
