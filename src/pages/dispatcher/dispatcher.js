import React, { useState } from 'react';

// Sample initial data for active rides and available drivers
const initialActiveRides = [
  { id: 1, driver: 'John Doe', passenger: 'Alice Smith', status: 'In Progress', destination: 'Airport' },
  { id: 2, driver: 'Jane Doe', passenger: 'Bob Johnson', status: 'Waiting', destination: 'Train Station' },
];

const availableDrivers = ['John Doe', 'Jane Doe', 'David Clark'];

const Dispatcher = () => {
  const [activeRides, setActiveRides] = useState(initialActiveRides);
  const [newRide, setNewRide] = useState({ driver: '', passenger: '', destination: '' });

  // Handle input changes for the new ride form
  const handleInputChange = (e) => {
    setNewRide({
      ...newRide,
      [e.target.name]: e.target.value,
    });
  };

  // Handle assigning a new ride
  const handleAssignRide = () => {
    const newAssignedRide = {
      ...newRide,
      id: activeRides.length + 1,
      status: 'Waiting',
    };
    setActiveRides([...activeRides, newAssignedRide]);
    setNewRide({ driver: '', passenger: '', destination: '' });
  };

  // Handle updating ride status
  const handleStatusUpdate = (id, newStatus) => {
    const updatedRides = activeRides.map(ride =>
      ride.id === id ? { ...ride, status: newStatus } : ride
    );
    setActiveRides(updatedRides);
  };

  return (
    <div className="dispatcher-container">
      <h2>Dispatcher Dashboard</h2>

      {/* Assign New Ride Form */}
      <div className="form-group">
        <h3>Assign New Ride</h3>
        <select
          name="driver"
          value={newRide.driver}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Driver</option>
          {availableDrivers.map(driver => (
            <option key={driver} value={driver}>{driver}</option>
          ))}
        </select>
        <input
          type="text"
          name="passenger"
          value={newRide.passenger}
          onChange={handleInputChange}
          placeholder="Passenger Name"
          required
        />
        <input
          type="text"
          name="destination"
          value={newRide.destination}
          onChange={handleInputChange}
          placeholder="Destination"
          required
        />
        <button onClick={handleAssignRide} disabled={!newRide.driver || !newRide.passenger || !newRide.destination}>
          Assign Ride
        </button>
      </div>

      {/* Active Rides List */}
      <div className="active-rides-list">
        <h3>Active Rides</h3>
        {activeRides.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Driver</th>
                <th>Passenger</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeRides.map(ride => (
                <tr key={ride.id}>
                  <td>{ride.driver}</td>
                  <td>{ride.passenger}</td>
                  <td>{ride.destination}</td>
                  <td>{ride.status}</td>
                  <td>
                    {ride.status !== 'Completed' && (
                      <>
                        <button onClick={() => handleStatusUpdate(ride.id, 'In Progress')}>Start</button>
                        <button onClick={() => handleStatusUpdate(ride.id, 'Completed')}>Complete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No active rides at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dispatcher;
