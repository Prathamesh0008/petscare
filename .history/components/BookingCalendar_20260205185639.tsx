'use client';

import { useState } from 'react';

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Generate dates for next 2 weeks
  const getDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }),
          available: Math.random() > 0.3, // Random availability for demo
        });
      }
    }
    
    return dates;
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold mb-4">Select Date & Time</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Available Dates</h4>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
          {getDates().map((date) => (
            <button
              key={date.date}
              onClick={() => setSelectedDate(date.date)}
              disabled={!date.available}
              className={`p-3 rounded-lg text-center ${
                selectedDate === date.date
                  ? 'bg-blue-600 text-white'
                  : date.available
                  ? 'bg-gray-100 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="text-sm">{date.display.split(' ')[0]}</div>
              <div className="font-bold">{date.display.split(' ')[1]}</div>
              <div className="text-xs">{date.display.split(' ')[2]}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="mb-6">
          <h4 className="font-medium mb-2">Available Times</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg text-center ${
                  selectedTime === time
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="font-bold mb-2">Selected Appointment</div>
          <div className="text-gray-700">
            {new Date(selectedDate).toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} at {selectedTime}
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}