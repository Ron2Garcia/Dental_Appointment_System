import React, { useState } from 'react';
import "../styles/Appointment.css"

const dentists = [
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Johnson' },
  { id: 3, name: 'Dr. Williams' },
];

const Appointment = () => {
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);

  // Function to simulate fetching available slots (replace with actual API call in real scenario)
  const fetchAvailableSlots = (dentistId, selectedDate) => {
    // Simulating data fetch with setTimeout
    setTimeout(() => {
      // Replace with actual logic to fetch available slots from backend
      // For demonstration, we'll set some hardcoded slots for the selectedDate
      const slots = [
        { id: 1, time: '9:00 AM' },
        { id: 2, time: '10:00 AM' },
        { id: 3, time: '11:00 AM' },
        { id: 4, time: '2:00 PM' },
        { id: 5, time: '3:00 PM' },
      ];
      setAvailableSlots(slots);
    }, 500); // Simulate delay for fetching data
  };

  // Handle selecting a dentist
  const handleDentistSelect = (dentist) => {
    setSelectedDentist(dentist);
    setAvailableSlots([]); // Clear previous slots when selecting new dentist
  };

  // Handle date selection
  const handleDateSelect = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    if (selectedDentist) {
      fetchAvailableSlots(selectedDentist.id, selectedDate);
    }
  };

  // Handle booking appointment
  const handleSlotSelect = (slot) => {
    console.log(`Appointment booked with ${selectedDentist.name} on ${selectedDate} at ${slot.time}`);
    // Here you can implement logic to book appointment (send data to backend, etc.)
    // Reset state after booking
    setSelectedDentist(null);
    setSelectedDate('');
    setAvailableSlots([]);
  };

  return (
    <div className="appointment-page">
      <h2>Book Your Dental Appointment</h2>
      <div className="dentist-list">
        <h3>Select a Dentist:</h3>
        <ul>
          {dentists.map((dentist) => (
            <li key={dentist.id}>
              <button onClick={() => handleDentistSelect(dentist)}>{dentist.name}</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedDentist && (
        <div className="date-selector">
          <h3>Select Date:</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateSelect}
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
      )}
      {selectedDentist && selectedDate && (
        <div className="available-slots">
          <h3>Available Slots for {selectedDentist.name} on {selectedDate}:</h3>
          <ul>
            {availableSlots.map((slot) => (
              <li key={slot.id}>
                <button onClick={() => handleSlotSelect(slot)}>{slot.time}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedDentist && selectedDate && availableSlots && (
        <div>
          <h3>Remarks:</h3>
          <textarea ></textarea>
        </div>
      )

      }
      
    </div>
  );
};

export default Appointment;
