import React, { useState } from 'react';

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-transparent absolute top-0 left-0 w-full z-50 border-b border-black">
      <div className="flex mr-10 ml-5 cursor-pointer" onClick={toggleSearch}>
        <h2 className="font-mono mr-4">Subjects</h2>
        <svg
          className="w-4 h-4 text-black fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div className="mr-6 cursor-pointer" onClick={toggleSearch}>
        <svg
          className="w-6 h-6 text-black fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M20.7 19.3l-3.8-3.8C17.5 14.2 18 12.2 18 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c2.2 0 4.2-.5 6.1-1.5l3.8 3.8c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM4 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" />
        </svg>
      </div>
      <div className="flex items-center justify-center flex-1">
        {/* Centered Heading */}
        <h1 className="text-black font-bold text-xl">Blood Donation</h1>
      </div>
      <div className="flex items-center space-x-4 mr-4">
        {searchVisible && (
          <input
            type="text"
            placeholder="Type here to search"
            className="border-b-2 border-black text-black mr-4 focus:outline-none"
          />
        )}
        <button className="border-b-2 border-transparent hover:border-black text-black hover:text-black">
          Donate
        </button>
        <button className="border-b-2 border-transparent hover:border-black text-black hover:text-black">
          Sign In / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
