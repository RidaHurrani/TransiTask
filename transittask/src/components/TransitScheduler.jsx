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

// import React, { useState } from "react";
// import axios from "axios";

// const TransitScheduler = () => {
//   const [startLocation, setStartLocation] = useState("");
//   const [endLocation, setEndLocation] = useState("");
//   const [directions, setDirections] = useState(null);
//   const [error, setError] = useState("");

//   const fetchTransitData = async () => {
//     const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your valid Google API key
//     const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
//       startLocation
//     )}&destination=${encodeURIComponent(
//       endLocation
//     )}&mode=transit&key=${API_KEY}`;

//     try {
//       const response = await axios.get(url);
      
//       if (response.data.routes && response.data.routes.length > 0) {
//         // Access the first route and its first leg
//         const firstRoute = response.data.routes[0].legs[0];
//         setDirections({
//           duration: firstRoute.duration.text,
//           distance: firstRoute.distance.text,
//           steps: firstRoute.steps.map((step) => step.html_instructions).join(", "),
//         });
//         setError(""); // Clear any previous errors
//       } else {
//         setError("No transit routes found. Please try again.");
//         setDirections(null);
//       }
//     } catch (err) {
//       console.error("Error fetching directions:", err);
//       setError("Failed to fetch transit directions. Please check your input or API key.");
//       setDirections(null);
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

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {directions && (
//         <div>
//           <h3>Directions:</h3>
//           <p><strong>Duration:</strong> {directions.duration}</p>
//           <p><strong>Distance:</strong> {directions.distance}</p>
//           <h4>Steps:</h4>
//           <p>{directions.steps}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransitScheduler;

// import React, { useState } from "react";

// const TransitScheduler = () => {
//   const [startLocation, setStartLocation] = useState("");
//   const [endLocation, setEndLocation] = useState("");
//   const [directions, setDirections] = useState(null);

//   const fetchTransitData = async () => {
//     // Placeholder for API call logic
//   };

//   return (
//     <div className="scheduler-container">
//       <h2 className="scheduler-title">Transit Scheduler</h2>
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
//       <button onClick={fetchTransitData}>Get Directions</button>
//     </div>
//   );
// };

// export default TransitScheduler;

// import React, { useState } from "react";
// import axios from "axios";

// const TransitScheduler = () => {
//   const [startLocation, setStartLocation] = useState("");
//   const [endLocation, setEndLocation] = useState("");
//   const [directions, setDirections] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   const API_KEY = "AIzaSyDH28YHvtvvRzoGgmkXnSP7JfhlmJkxvDk"; // Your Google API Key

//   const fetchTransitData = async () => {
//     const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
//       startLocation
//     )}&destination=${encodeURIComponent(
//       endLocation
//     )}&mode=transit&key=${API_KEY}`;

//     try {
//       const response = await axios.get(url);

//       if (response.data.routes && response.data.routes.length > 0) {
//         const firstRoute = response.data.routes[0].legs[0];
//         setDirections({
//           duration: firstRoute.duration.text,
//           distance: firstRoute.distance.text,
//           steps: firstRoute.steps.map((step) => step.html_instructions).join(", "),
//         });
//         setErrorMessage(""); // Clear previous errors
//       } else {
//         setErrorMessage("No transit routes found. Try different locations.");
//         setDirections(null);
//       }
//     } catch (error) {
//       console.error("Error fetching directions:", error);
//       setErrorMessage("Failed to fetch directions. Please check your input or API key.");
//     }
//   };

//   return (
//     <div className="scheduler-container">
//       <h2 className="scheduler-title">Transit Scheduler</h2>
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
//       <button onClick={fetchTransitData}>Get Directions</button>
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//       {directions && (
//         <div>
//           <h3>Route Info:</h3>
//           <p><strong>Duration:</strong> {directions.duration}</p>
//           <p><strong>Distance:</strong> {directions.distance}</p>
//           <p><strong>Steps:</strong> {directions.steps}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from "react";
// import axios from "axios";

// const TransitScheduler = () => {
//   const [startLocation, setStartLocation] = useState("");
//   const [endLocation, setEndLocation] = useState("");
//   const [directions, setDirections] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const API_KEY = "AIzaSyDH28YHvtvvRzoGgmkXnSP7JfhlmJkxvDk";

//   const fetchNearbyPlaces = async () => {
//     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${encodeURIComponent(
//       startLocation
//     )}&radius=1000&types=transit_station&key=${API_KEY}`;

//     try {
//       const response = await axios.get(url);
//       if (response.data.results && response.data.results.length > 0) {
//         setSuggestions(response.data.results.map((place) => place.name));
//         setErrorMessage("");
//       } else {
//         setSuggestions([]);
//         setErrorMessage("No nearby transit stops found.");
//       }
//     } catch (error) {
//       console.error("Error fetching nearby places:", error);
//       setErrorMessage("Failed to fetch nearby places. Please check your input or API key.");
//     }
//   };

//   const fetchTransitData = async () => {
//     const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
//       startLocation
//     )}&destination=${encodeURIComponent(
//       endLocation
//     )}&mode=transit&key=${API_KEY}`;

//     try {
//       const response = await axios.get(url);

//       if (response.data.routes && response.data.routes.length > 0) {
//         const firstRoute = response.data.routes[0].legs[0];
//         setDirections({
//           duration: firstRoute.duration.text,
//           distance: firstRoute.distance.text,
//           steps: firstRoute.steps.map((step) => step.html_instructions).join(", "),
//         });
//         setErrorMessage("");
//       } else {
//         setErrorMessage("No transit routes found. Try different locations.");
//         setDirections(null);
//       }
//     } catch (error) {
//       console.error("Error fetching directions:", error);
//       setErrorMessage("Failed to fetch directions. Please check your input or API key.");
//     }
//   };

//   return (
//     <div className="scheduler-container">
//       <h2 className="scheduler-title">Transit Scheduler</h2>
//       <input
//         type="text"
//         placeholder="Start Location (Latitude, Longitude)"
//         value={startLocation}
//         onChange={(e) => setStartLocation(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="End Location"
//         value={endLocation}
//         onChange={(e) => setEndLocation(e.target.value)}
//       />
//       <button onClick={fetchTransitData}>Get Directions</button>
//       <button onClick={fetchNearbyPlaces}>Find Nearby Places</button>
//       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//       {suggestions.length > 0 && (
//         <div>
//           <h3>Nearby Transit Stops:</h3>
//           <ul>
//             {suggestions.map((place, index) => (
//               <li key={index}>{place}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {directions && (
//         <div>
//           <h3>Route Info:</h3>
//           <p><strong>Duration:</strong> {directions.duration}</p>
//           <p><strong>Distance:</strong> {directions.distance}</p>
//           <p><strong>Steps:</strong> {directions.steps}</p>
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
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "AIzaSyDH28YHvtvvRzoGgmkXnSP7JfhlmJkxvDk";

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
