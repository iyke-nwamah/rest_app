"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Reservation.css';

interface ReservationData {
  name: string;
  phone: string;
  people: number;
  checkInDate: string;
  checkInTime: string;
  email: string;
}

const initialFormData: ReservationData = {
  name: '',
  phone: '',
  people: 1,
  checkInDate: '',
  checkInTime: '',
  email: '',
};

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>(initialFormData);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server or store it locally)
    console.log(formData); // For demonstration purposes
  };

  return (
    <div className="reservation-container">
      <h1>Reservation Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="people">Number of People:</label>
          <input
            type="number"
            id="people"
            name="people"
            value={formData.people}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInTime">Check-in Time:</label>
          <input
            type="time"
            id="checkInTime"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
