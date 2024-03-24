import React, { useState } from 'react';

const HostBloodBankForm = () => {
  const [formData, setFormData] = useState({
    bloodBankName: '',
    parentHospitalName: '',
    fromDate: '',
    toDate: '',
    email: '',
    contactNo: '',
    address: {
      city: '',
      state: ''
    },
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto shadow-xl px-5 mt-20 pb-10">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Host a Blood Bank</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="bloodBankName" className="block font-medium mb-1 text-red-600">Blood Bank Name</label>
            <input type="text" id="bloodBankName" name="bloodBankName" value={formData.bloodBankName} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="parentHospitalName" className="block font-medium mb-1 text-red-600">Parent Hospital Name</label>
            <input type="text" id="parentHospitalName" name="parentHospitalName" value={formData.parentHospitalName} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="fromDate" className="block font-medium mb-1 text-red-600">From Date</label>
            <input type="date" id="fromDate" name="fromDate" value={formData.fromDate} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="toDate" className="block font-medium mb-1 text-red-600">To Date</label>
            <input type="date" id="toDate" name="toDate" value={formData.toDate} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="email" className="block font-medium mb-1 text-red-600">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="contactNo" className="block font-medium mb-1 text-red-600">Contact No</label>
            <input type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="city" className="block font-medium mb-1 text-red-600">City</label>
            <input type="text" id="city" name="city" value={formData.address.city} onChange={handleAddressChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2">
            <label htmlFor="state" className="block font-medium mb-1 text-red-600">State</label>
            <input type="text" id="state" name="state" value={formData.address.state} onChange={handleAddressChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700" />
          </div>
          <div className="w-full px-3 mb-6 md:w-full">
            <label htmlFor="category" className="block font-medium mb-1 text-red-600">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring focus:border-red-700">
              <option value="">Select category</option>
              <option value="govt">Government</option>
              <option value="private">Private</option>
              <option value="charitable">Charitable</option>
            </select>
          </div>
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Host a Blood Bank</button>
      </form>
    </div>
  );
};

export default HostBloodBankForm;