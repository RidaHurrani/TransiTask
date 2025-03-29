// import React, { useState } from "react";
// import axios from "axios";

// const TransitScheduler = () => {
//   const [startLocation, setStartLocation] = useState("");
//   const [endLocation, setEndLocation] = useState("");
//   const [directions, setDirections] = useState(null);

//   const fetchTransitData = async () => {
//     const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API key
//     const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation}&destination=${endLocation}&mode=transit&key=${API_KEY}`;
//     try {
//       const response = await axios.get(url);
//       setDirections(response.data.routes[0].legs[0]);
//     } catch (error) {
//       console.error("Error fetching directions", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Transit Scheduler</h2>
//       <input
//         type="text"
//         placeholder="Start Location"
//         value={startLocation}
//         onChange={(e) => setStartLocation(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="End Location"
//         value={endLocation}
//         onChange={(e) => setEndLocation(e.target.value)}
//       />
//       <button onClick={fetchTransitData}>Get Transit Directions</button>
//       {directions && (
//         <div>
//           <h3>Directions:</h3>
//           <p>{directions.duration.text}</p>
//           <p>{directions.distance.text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransitScheduler;

import React, { useState } from "react";
import axios from "axios";

const TransitScheduler = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState("");

  const fetchTransitData = async () => {
    const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your valid Google API key
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
      startLocation
    )}&destination=${encodeURIComponent(
      endLocation
    )}&mode=transit&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      
      if (response.data.routes && response.data.routes.length > 0) {
        // Access the first route and its first leg
        const firstRoute = response.data.routes[0].legs[0];
        setDirections({
          duration: firstRoute.duration.text,
          distance: firstRoute.distance.text,
          steps: firstRoute.steps.map((step) => step.html_instructions).join(", "),
        });
        setError(""); // Clear any previous errors
      } else {
        setError("No transit routes found. Please try again.");
        setDirections(null);
      }
    } catch (err) {
      console.error("Error fetching directions:", err);
      setError("Failed to fetch transit directions. Please check your input or API key.");
      setDirections(null);
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

      {error && <p style={{ color: "red" }}>{error}</p>}

      {directions && (
        <div>
          <h3>Directions:</h3>
          <p><strong>Duration:</strong> {directions.duration}</p>
          <p><strong>Distance:</strong> {directions.distance}</p>
          <h4>Steps:</h4>
          <p>{directions.steps}</p>
        </div>
      )}
    </div>
  );
};

export default TransitScheduler;
