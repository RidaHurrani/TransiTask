import React, { useState } from "react";
import axios from "axios";

const TransitScheduler = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [directions, setDirections] = useState(null);

  const fetchTransitData = async () => {
    const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API key
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&mode=transit&key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      setDirections(response.data.routes[0].legs[0]);
    } catch (error) {
      console.error("Error fetching directions", error);
    }
  };

  return (
    <div>
      <h2>Transit Scheduler</h2>
      <input
        type="text"
        placeholder="Start Location"
        value={startLocation}
        onChange={(e) => setStartLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Location"
        value={endLocation}
        onChange={(e) => setEndLocation(e.target.value)}
      />
      <button onClick={fetchTransitData}>Get Transit Directions</button>
      {directions && (
        <div>
          <h3>Directions:</h3>
          <p>{directions.duration.text}</p>
          <p>{directions.distance.text}</p>
        </div>
      )}
    </div>
  );
};

export default TransitScheduler;
