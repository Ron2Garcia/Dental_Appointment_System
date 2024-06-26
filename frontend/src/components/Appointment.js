import React, { useState } from 'react';
import axios from 'axios'
import "../styles/Appointment.css"

const dentists = [
  { id: 1, name: 'Dr. Smith' },
  { id: 2, name: 'Dr. Johnson' },
  { id: 3, name: 'Dr. Williams' },
  { id: 4, name: 'Dr. Williams' }
];

const Appointment = (onClickSave) => {
  const [selectedDentist, setSelectedDentist] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  // const [remarks, setRemarks] = useState('');

  const fetchAvailableSlots = (dentistId, selectedDate) => {
    setTimeout(() => {
      const slots = [
        { id: 1, time: '9:00 AM' },
        { id: 2, time: '10:00 AM' },
        { id: 3, time: '11:00 AM' },
        { id: 4, time: '2:00 PM' },
        { id: 5, time: '3:00 PM' },
      ];
      setAvailableSlots(slots);
    }, 500); 
  };

  const handleDentistSelect = (dentist) => {
    setSelectedDentist(dentist);
    setAvailableSlots([]); 
  };

  const handleDateSelect = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    if (selectedDentist) {
      fetchAvailableSlots(selectedDentist.id, selectedDate);
    }
  };

  const handleSlotSelect = async (slot) => {
    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(`Appointment booked with ${selectedDentist.name} on ${selectedDate} at ${slot.time}`);
    const scheduleDetail = {
      email: user.email,
      dentist: selectedDentist.name,
      date: selectedDate,
      time: slot.time,
      // remarks: remarks
    }
    console.log(scheduleDetail)
    console.log(user.email,"sessionStorage.getItem('user').email")
    const url = `http://localhost:3050/api/schedules/`
    await axios.post(url,scheduleDetail).then(()=>{
        console.log('saved')
        alert('Saved')
        onClickSave()
        setSelectedDentist(null);
        setSelectedDate('');
        setAvailableSlots([]);
        // setRemarks('');
    })

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
      {/* {selectedDentist && selectedDate && (
        <div>
          <h3>Remarks:</h3>
          <textarea onInput={setRemarks((e) => e.target.value)}></textarea>
        </div>
      )

      } */}
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
      
    </div>
  );
};

export default Appointment;
