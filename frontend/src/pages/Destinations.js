import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/destinations');
      setDestinations(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching destinations:', error);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchDestinations();
      return;
    }
    
    try {
      const response = await axios.get(`http://localhost:5000/api/destinations/search/${searchTerm}`);
      setDestinations(response.data.data);
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  };

  return (
    <div className="destinations-page">
      <div className="page-header">
        <h1>Explore Destinations</h1>
        <p>Find your perfect getaway</p>
      </div>

      <div className="container section">
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn">Search</button>
          </form>
        </div>

        {loading ? (
          <div className="loading">Loading destinations...</div>
        ) : destinations.length === 0 ? (
          <div className="error">No destinations found</div>
        ) : (
          <div className="destinations-grid">
            {destinations.map((dest) => (
              <div key={dest._id} className="destination-card">
                <div className="destination-image">
                  <img src={dest.image} alt={dest.name} />
                  <div className="rating">⭐ {dest.rating}</div>
                </div>
                <div className="destination-info">
                  <span className="category">{dest.category}</span>
                  <h3>{dest.name}</h3>
                  <p>{dest.description.substring(0, 120)}...</p>
                  <div className="destination-meta">
                    <span>⏱️ {dest.duration}</span>
                  </div>
                  <div className="destination-footer">
                    <span className="price">From ${dest.price}</span>
                    <Link to={`/destinations/${dest._id}`} className="btn">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
