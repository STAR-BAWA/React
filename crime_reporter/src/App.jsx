import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

const App = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    crime: '',
    image: null  // For the image
  });

  // Handle input change for text and select fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image file input
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]  // Get the selected file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a FormData object to handle image and other inputs
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('location', formData.location);
    formDataToSubmit.append('crime', formData.crime);
    formDataToSubmit.append('image', formData.image);  // Append image file

    // You can send this FormData object to the backend via API
    console.log('Form Data:', formDataToSubmit);

    alert('Form submitted successfully!');
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h2 className="mb-4">Crime Reporting Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input
            type="text"
            name="location"
            className="form-control"
            id="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter the location"
          />
        </div>

        {/* Crime List */}
        <div className="mb-3">
          <label htmlFor="crime" className="form-label">Type of Crime:</label>
          <select
            name="crime"
            className="form-select"
            id="crime"
            value={formData.crime}
            onChange={handleChange}
          >
            <option value="">Select Crime</option>
            <option value="Accident">Accident</option>
            <option value="Theft">Theft</option>
            <option value="Robbery">Robbery</option>
            <option value="Mob Lynching">Mob Lynching</option>
            <option value="Vandalism">Vandalism</option>
            <option value="Assault">Assault</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Evidence (Image):</label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  );
};

export default App;
