import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const preselectedDestination = location.state?.destination?.name || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: preselectedDestination,
    travelers: 1,
    date: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      setStatus({ 
        type: 'success', 
        message: 'Booking submitted successfully! We will contact you soon.' 
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelers: 1,
        date: '',
        message: ''
      });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to submit booking. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      <div className="page-header">
        <h1>Book Your Adventure</h1>
        <p>Fill out the form below to start your journey</p>
      </div>

      <div className="container section">
        <div className="booking-container">
          <form onSubmit={handleSubmit} className="booking-form">
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label>Destination *</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  placeholder="Maldives, Paris, etc."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Number of Travelers *</label>
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label>Travel Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your preferences, special requirements, etc."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>

          <div className="booking-info-sidebar">
            <div className="info-card">
              <h3>📞 Need Help?</h3>
              <p>Our travel experts are here to assist you</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> info@wanderlusttours.com</p>
            </div>

            <div className="info-card">
              <h3>✓ What's Included</h3>
              <ul>
                <li>Accommodation</li>
                <li>Transportation</li>
                <li>Tour Guide</li>
                <li>Travel Insurance</li>
                <li>Meals (as per itinerary)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
