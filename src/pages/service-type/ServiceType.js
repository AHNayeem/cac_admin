import React, { useState } from 'react';

// Sample initial service types
const initialServiceTypes = [
  { id: 1, name: 'Economy', description: 'Affordable rides', pricePerKm: 1, vehicleType: 'Sedan' },
  { id: 2, name: 'Premium', description: 'Luxury experience', pricePerKm: 2, vehicleType: 'Luxury Sedan' },
];

const ServiceType = () => {
  const [serviceTypes, setServiceTypes] = useState(initialServiceTypes);
  const [newServiceType, setNewServiceType] = useState({ name: '', description: '', pricePerKm: '', vehicleType: '' });

  // Handle input changes for new service type form
  const handleChange = (e) => {
    setNewServiceType({
      ...newServiceType,
      [e.target.name]: e.target.value,
    });
  };

  // Handle adding a new service type
  const handleAddServiceType = () => {
    const newService = {
      ...newServiceType,
      id: serviceTypes.length + 1,
      pricePerKm: parseFloat(newServiceType.pricePerKm),
    };
    setServiceTypes([newService, ...serviceTypes]);
    setNewServiceType({ name: '', description: '', pricePerKm: '', vehicleType: '' });
  };

  // Handle deleting a service type
  const handleDelete = (id) => {
    const filtered = serviceTypes.filter(service => service.id !== id);
    setServiceTypes(filtered);
  };

  return (
    <div className="service-type-container">
      <h2>Service Types</h2>

      {/* Add New Service Type Form */}
      <div className="form-group">
        <h3>Add New Service Type</h3>
        <input
          type="text"
          name="name"
          value={newServiceType.name}
          onChange={handleChange}
          placeholder="Service Name"
          required
        />
        <textarea
          name="description"
          value={newServiceType.description}
          onChange={handleChange}
          placeholder="Service Description"
          rows="2"
          required
        />
        <input
          type="number"
          name="pricePerKm"
          value={newServiceType.pricePerKm}
          onChange={handleChange}
          placeholder="Price per km"
          required
        />
        <input
          type="text"
          name="vehicleType"
          value={newServiceType.vehicleType}
          onChange={handleChange}
          placeholder="Vehicle Type"
          required
        />
        <button onClick={handleAddServiceType} disabled={!newServiceType.name || !newServiceType.pricePerKm}>
          Add Service
        </button>
      </div>

      {/* Service Type List */}
      {serviceTypes.length > 0 && (
        <div className="service-type-list">
          <h3>Available Service Types</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price per km</th>
                <th>Vehicle Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {serviceTypes.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>${service.pricePerKm}</td>
                  <td>{service.vehicleType}</td>
                  <td>
                    <button className="delete-button" onClick={() => handleDelete(service.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiceType;
