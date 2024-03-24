
// import React from 'react';

// const Contact = () => {
//   return (
//     <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//       <h1 className='py-4 text-4xl font-bold text-center text-{#001b5e}'>BOOK APPOINTMENT</h1>
//       <form action="" method='POST' encType='multipart/form-data'>
//         <div className='grid md:grid-cols-2 gap-4 py-2'>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Name:</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
//           </div>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Phone No:</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
//           </div>
//           <div className='flex flex-col py-2'>
//             <label className='uppercase text-sm py-2'>Email:</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
//           </div>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Subject:</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
//           </div>
          
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Select Date:</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300' type="date" name='appointmentDate' />
//           </div>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Select Time:</label>
//             <select className='border-2 rounded-lg p-3 flex border-gray-300' name='appointmentTime'>
//               <option >--select time--</option>
//               <option value="9:00 AM">9:00 AM</option>
//               <option value="10:00 AM">10:00 AM</option>
//               <option value="11:00 AM">11:00 AM</option>
//               <option value="12:00 PM">12:00 PM</option>
//               <option value="1:00 PM">1:00 PM</option>
//               <option value="2:00 PM">2:00 PM</option>
//               <option value="3:00 PM">3:00 PM</option>
//               <option value="4:00 PM">4:00 PM</option>
//               <option value="5:00 PM">5:00 PM</option>
              
//             </select>
//           </div>
//         </div>
//         <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Message:</label>
//             <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='5' name='message' />
//           </div>
//         <button className='bg-green-500 text-black-100 mt-4 w-fill p-4 rounded-lg'>Send message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    appointmentDate: false,
    appointmentTime: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = true;
        isValid = false;
      }
    }
    setFormErrors(errors);
    if (isValid) {
      // Form submission logic goes here
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form contains errors. Please fill in all required fields.');
    }
  };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-{#001b5e}'>BOOK APPOINTMENT</h1>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 py-2'>
          <div className='flex flex-col'>
            <label className={`uppercase text-sm py-2 ${formErrors.name ? 'text-red-500' : ''}`}>Name:</label>
            <input className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.name ? 'border-red-500' : ''}`} type="text" name='name' value={formData.name} onChange={handleChange} required />
          </div>
          <div className='flex flex-col'>
            <label className={`uppercase text-sm py-2 ${formErrors.phone ? 'text-red-500' : ''}`}>Phone No:</label>
            <input className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.phone ? 'border-red-500' : ''}`} type="text" name='phone' value={formData.phone} onChange={handleChange} required />
          </div>
          <div className='flex flex-col py-2'>
            <label className={`uppercase text-sm py-2 ${formErrors.email ? 'text-red-500' : ''}`}>Email:</label>
            <input className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.email ? 'border-red-500' : ''}`} type="email" name='email' value={formData.email} onChange={handleChange} required />
          </div>
         
          <div className='flex flex-col'>
            <label className={`uppercase text-sm py-2 ${formErrors.appointmentDate ? 'text-red-500' : ''}`}>Select Date of Appointment:</label>
            <input className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.appointmentDate ? 'border-red-500' : ''}`} type="date" name='appointmentDate' value={formData.appointmentDate} onChange={handleChange} required />
          </div>
          <div className='flex flex-col'>
            <label className={`uppercase text-sm py-2 ${formErrors.appointmentTime ? 'text-red-500' : ''}`}>Select Time of Appointment:</label>
            <select className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.appointmentTime ? 'border-red-500' : ''}`} name='appointmentTime' value={formData.appointmentTime} onChange={handleChange} required>
              <option>--select time--</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className={`uppercase text-sm py-2 ${formErrors.message ? 'text-red-500' : ''}`}>Message:</label>
          <textarea className={`border-2 rounded-lg p-3 flex border-gray-300 ${formErrors.message ? 'border-red-500' : ''}`} rows='5' name='message' value={formData.message} onChange={handleChange} required />
        </div>
        <button className='bg-green-500 text-black-100 mt-4 w-fill p-4 rounded-lg'>Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;
