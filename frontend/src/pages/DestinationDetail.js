import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestination();
  }, [id]);

  const fetchDestination = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/destinations/${id}`);
      setDestination(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching destination:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading destination details...</div>;
  }

  if (!destination) {
    return <div className="error">Destination not found</div>;
  }

  return (
    <div className="destination-detail">
      <div className="detail-header" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="header-overlay">
          <div className="container">
            <h1>{destination.name}</h1>
            <div className="header-meta">
              <span className="category">{destination.category}</span>
              <span className="rating">⭐ {destination.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="detail-content">
          <div className="main-content">
            <h2>About This Destination</h2>
            <p>{destination.description}</p>

            {destination.highlights && destination.highlights.length > 0 && (
              <div className="highlights">
                <h3>Highlights</h3>
                <ul>
                  {destination.highlights.map((highlight, index) => (
                    <li key={index}>✓ {highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="sidebar">
            <div className="booking-card">
              <div className="price-tag">
                <span className="from">From</span>
                <span className="price">${destination.price}</span>
                <span className="per">per person</span>
              </div>
              
              <div className="booking-info">
                <p>⏱️ Duration: {destination.duration}</p>
                <p>⭐ Rating: {destination.rating}/5</p>
                <p>📍 Category: {destination.category}</p>
              </div>

              <Link to="/booking" state={{ destination }} className="btn btn-primary btn-block">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
