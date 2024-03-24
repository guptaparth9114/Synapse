


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-green-500  to-teal-900">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex flex-col md:flex-row items-center">
//             < h2 className="text-4xl font-bold text-gray-900 mr-4">Company Name</h2>
//             <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="mt-4 md:mt-0 flex  flex-col justify-center md:justify-end space-y-4">
//             <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200 ">Home</Link>
//             <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">About</Link>
//             <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Contact</Link>
//             <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Sign Up</Link>
//             <Link to="/l" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Log In</Link>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row  items-center border-2 border-white">
            <h2 className="text-4xl font-bold text-white mr-5 ">Company Name</h2>
            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col justify-center md:justify-end space-y-4">
            <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Home</Link>
            <hr className="border-gray-300 my-1" />
            <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">About</Link>
            <hr className="border-gray-300 my-1" />
            <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Contact</Link>
            <hr className="border-gray-300 my-1" />
            <Link to="/" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Sign Up</Link>
            <hr className="border-gray-300 my-1" />
            <Link to="/l" className="text-lg font-bold text-white hover:scale-110 ease-in duration-200">Log In</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
