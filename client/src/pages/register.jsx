import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    contactno: '',
    usertype: 'user', // Default to use
    experience: '',
    fieldOfExpertise: '',
    hospital: '',
    verificationDetails: '',
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // try {
    //   await axios.post('http://localhost:8800/api/auth/register', inputs);
    //   navigate('/');
    // } catch (err) {
    //   setErr(err.response.data);
    // }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <img
          src=""
          alt="Quiz"
          className="fixed inset-0 object-cover w-full h-full"
        />
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-blue-100 p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold text-[#176B87] mb-4">Sign Up</h1>
            <div className="flex items-center justify-center">
              <div className="z-10 relative w-full h-full bg-[#86B6F6] flex items-center justify-center rounded-md">
                <div className="flex flex-col gap-4">
                  <form className="flex flex-col gap-4 m-3">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Contact Number"
                      name="contactno"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                    />
                    <div>
                      <label htmlFor="usertype">User Type:</label>
                      <select
                        id="usertype"
                        name="usertype"
                        value={inputs.usertype}
                        onChange={handleChange}
                        className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                      >
                        <option value="user">User</option>
                        <option value="doctor">Doctor</option>
                      </select>
                    </div>
                    {inputs.usertype === 'doctor' && (
                      <div>
                        <input
                          type="text"
                          placeholder="Experience"
                          name="experience"
                          onChange={handleChange}
                          className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                        />
                        <input
                          type="text"
                          placeholder="Field of Expertise"
                          name="fieldOfExpertise"
                          onChange={handleChange}
                          className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                        />
                        <input
                          type="text"
                          placeholder="Current Hospital"
                          name="hospital"
                          onChange={handleChange}
                          className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                        />
                        <textarea
                          placeholder="Verification Details"
                          name="verificationDetails"
                          onChange={handleChange}
                          className="border-none border-b-2 border-blue-100 p-2 rounded-md"
                        />
                      </div>
                    )}
                    <button
                      onClick={handleClick}
                      className="w-1/2 p-2 border-none bg-[#176B87] text-white font-bold cursor-pointer rounded-md"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <p>Already a User?</p>
              <Link to="/login" className="text-red-600">
                Login
              </Link>
            </div>
            <Link to="/">
              <button className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

