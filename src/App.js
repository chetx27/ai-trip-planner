import React, { useState } from 'react';
import Scene3D from './Scene3D';
import { motion } from 'framer-motion';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [formData, setFormData] = useState({
    destination: '',
    days: 3,
    budget: 'mid-range',
    travelStyle: 'balanced',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePlan = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          days: Number(formData.days),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong while generating your plan.');
      }

      setResult(data);
    } catch (requestError) {
      setError(requestError.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="scene-container">
        <Scene3D />
      </div>

      <motion.div
        className="overlay"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="title">AI Trip Planner</h1>
        <p className="subtitle">A full-stack app connecting your frontend to live travel APIs.</p>

        <form className="planner-form" onSubmit={generatePlan}>
          <label>
            Destination
            <input
              required
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g., Paris"
            />
          </label>

          <div className="form-grid">
            <label>
              Days
              <input
                type="number"
                min="1"
                max="14"
                name="days"
                value={formData.days}
                onChange={handleChange}
              />
            </label>

            <label>
              Budget
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="budget">Budget</option>
                <option value="mid-range">Mid-range</option>
                <option value="luxury">Luxury</option>
              </select>
            </label>

            <label>
              Travel style
              <select name="travelStyle" value={formData.travelStyle} onChange={handleChange}>
                <option value="balanced">Balanced</option>
                <option value="adventure">Adventure</option>
                <option value="culture">Culture</option>
                <option value="relaxed">Relaxed</option>
              </select>
            </label>
          </div>

          <button className="cta-button" disabled={loading} type="submit">
            {loading ? 'Generating...' : 'Generate itinerary'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result-card">
            <h2>{result.destination}</h2>
            <p>
              Current weather: {result.weather.temperature}°C (code {result.weather.weatherCode})
            </p>
            <p>{result.itinerary.summary}</p>

            <div className="day-list">
              {result.itinerary.days?.map((day) => (
                <div key={day.day} className="day-item">
                  <h3>
                    Day {day.day}: {day.title}
                  </h3>
                  <ul>
                    {day.activities?.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
