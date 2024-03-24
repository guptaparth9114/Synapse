import React, { useState } from 'react';
import axios from 'axios';

const BloodDonationCamps = () => {
  // Dummy data for blood donation camps
  const bloodDonationCamps = [
    { id: 1, name: 'Blood Donation Camp 1', date: '2024-03-10', location: 'Location 1' },
    { id: 2, name: 'Blood Donation Camp 2', date: '2024-03-15', location: 'Location 2' },
    { id: 3, name: 'Blood Donation Camp 3', date: '2024-03-20', location: 'Location 3' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectedCampId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      // Validate form data (you can add your own validation logic here)

      // Send POST request to register user for the selected blood donation camp
    //   await axios.post('http://example.com/register', formData);
  console.log(formData)
      // Reset form data after successful registration
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        selectedCampId: null,
      });

      // Show success message or perform any other actions after successful registration
      console.log('Registration successful!');
    } catch (error) {
      // Handle errors (e.g., display error message to user)
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ongoing Blood Donation Camps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bloodDonationCamps.map((camp) => (
          <div key={camp.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{camp.name}</h3>
            <p className="text-gray-600">Date: {camp.date}</p>
            <p className="text-gray-600">Location: {camp.location}</p>
            <button onClick={() => setFormData((prevData) => ({ ...prevData, selectedCampId: camp.id }))} className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-md">Register</button>
          </div>
        ))}
      </div>

      {/* Registration form */}
      {formData.selectedCampId && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Register for {bloodDonationCamps.find((camp) => camp.id === formData.selectedCampId)?.name}</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number</label>
              <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            <button type="button" onClick={handleRegister} className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BloodDonationCamps;
