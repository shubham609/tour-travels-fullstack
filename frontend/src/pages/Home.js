import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/destinations');
      setDestinations(response.data.data.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore breathtaking destinations around the world</p>
          <Link to="/destinations" className="btn btn-primary">Start Exploring</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          {loading ? (
            <div className="loading">Loading destinations...</div>
          ) : (
            <div className="destinations-grid">
              {destinations.map((dest) => (
                <div key={dest._id} className="destination-card">
                  <div className="destination-image">
                    <img src={dest.image} alt={dest.name} />
                  </div>
                  <div className="destination-info">
                    <h3>{dest.name}</h3>
                    <p>{dest.description.substring(0, 100)}...</p>
                    <div className="destination-footer">
                      <span className="price">From ${dest.price}</span>
                      <Link to={`/destinations/${dest._id}`} className="btn">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/destinations" className="btn btn-primary">View All Destinations</Link>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Best Prices</h3>
              <p>Competitive rates and exclusive deals on all tour packages</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & Secure</h3>
              <p>Your safety is our priority with comprehensive travel insurance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Expert Guides</h3>
              <p>Professional local guides to enhance your travel experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Customizable</h3>
              <p>Tailor-made itineraries to match your preferences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
