import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const AppointCalendar = () => {
  const [selectedAppointment, setSelectedAppointment] = useState({ id: 0, title: '', start: '', end: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null); // New state for editing appointment

  // Dummy data for appointments
  const [appointments, setAppointments] = useState([
    { id: 1, title: 'Appointment 1', start: '2024-03-10T10:00:00', end: '2024-03-10T12:00:00' },
    { id: 2, title: 'Appointment 2', start: '2024-03-15T14:00:00', end: '2024-03-15T16:00:00' },
    { id: 3, title: 'Appointment 3', start: '2024-03-20T09:00:00', end: '2024-03-20T11:00:00' },
  ]);

  const handleEventClick = (clickInfo) => {
    const clickedAppointment = appointments.find(appointment => appointment.id == clickInfo.event.id);
    if (clickedAppointment) {
      setSelectedAppointment(clickedAppointment);
      setIsModalOpen(true);
    }
  };

  const handleEditAppointment = () => {
    // Set the editing appointment to the selected appointment
    setEditingAppointment(selectedAppointment);
    setIsModalOpen(true); // Open modal for editing
  };

  const handleRemoveAppointment = () => {
    // Remove the appointment from the appointments array
    setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== selectedAppointment.id));
    setIsModalOpen(false); // Close modal after removing
  };

  // Function to update the appointment after editing
  const updateAppointment = (updatedAppointment) => {
    setAppointments(prevAppointments => prevAppointments.map(appointment =>
      appointment.id === updatedAppointment.id ? updatedAppointment : appointment
    ));
    setIsModalOpen(false); // Close modal after updating
  };

  return (
    <div className="w-[50%] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={appointments}
        eventClick={handleEventClick}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedAppointment.title}</h2>
            <p>{selectedAppointment.start}</p>
            <p>{selectedAppointment.end}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={handleEditAppointment} className="px-4 py-2 bg-blue-500 text-white rounded-md">Edit</button>
              <button onClick={handleRemoveAppointment} className="px-4 py-2 bg-red-500 text-white rounded-md">Remove</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
      {editingAppointment && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
            {/* Implement form or modal for editing appointment details */}
            {/* Update appointment using the updateAppointment function */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointCalendar
