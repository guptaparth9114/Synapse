// Login.js

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const {login}=useContext(AuthContext);
  const handleLogin=async (e)=>{
    e.preventDefault()
    try{
    const res=await login(inputs);
    navigate("/")
    }catch(err){
      if (err.response && err.response.data && err.response.data.message) {
        setErr(err.response.data.message);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

// State to track if popup is open



  const handleClose = () => {
    setIsOpen(false); // Close the popup
  };
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundImage: "url('/assets/fer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-md w-full space-y-8 bg-red-200 bg-opacity-75 rounded-lg p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-mono text-black">Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
           
          </div>

          <div>
            <button
            onClick={handleLogin}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <Link to="/">
              <button
                onClick={handleClose}
                className="mt-4 bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              </Link>
      </div>
      
    </div>
  );
}

export default Login;
