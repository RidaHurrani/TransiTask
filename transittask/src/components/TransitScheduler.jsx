

import React, { useState } from "react";
import axios from "axios";

const TransitScheduler = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [directions, setDirections] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "AIzaSyD--rYPOzZ9IeYTpu_pAVdQAWcggEWEj4g";

  const fetchTransitData = async () => {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
      startLocation
    )}&destination=${encodeURIComponent(
      endLocation
    )}&mode=transit&key=${API_KEY}`;

    try {
      const response = await axios.get(url);

      if (response.data.routes && response.data.routes.length > 0) {
        const firstRoute = response.data.routes[0].legs[0];
        setDirections({
          duration: firstRoute.duration.text,
          distance: firstRoute.distance.text,
          steps: firstRoute.steps.map((step) => step.html_instructions).join(", "),
        });
        setErrorMessage(""); // Clear any previous errors
      } else {
        setErrorMessage("No transit routes found. Try different postal codes or locations.");
        setDirections(null);
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
      setErrorMessage("Failed to fetch directions. Please check your input or API key.");
    }
  };

  return (
    <div className="scheduler-container">
 
      <h2 className="scheduler-title">Transit Scheduler</h2>
      <input
        type="text"
        placeholder="Start Location (e.g., Postal Code or Place Name)"
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Location (e.g., Postal Code or Place Name)"
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)}
      />
      <button onClick={fetchTransitData}>Get Directions</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {directions && (
        <div>
          <h3>Route Info:</h3>
          <p><strong>Duration:</strong> {directions.duration}</p>
          <p><strong>Distance:</strong> {directions.distance}</p>
          <p><strong>Steps:</strong> {directions.steps}</p>
        </div>
      )}
    </div>
  );
};

export default TransitScheduler;
