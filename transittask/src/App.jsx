// import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
// import './App.css'

// import GoogleCalendar from './components/GoogleCalendar.jsx';
// import TodoGroceryList from './components/TodoGroceryList.jsx';
// import TransitScheduler from './components/TransitScheduler.jsx';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className = "header">
//         <h1>Welcome to TransiTask</h1>
//         <p>Manage your tasks, transit schedules, and calendar all in one place!</p>
//         {/* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */}
//       </div>
//       <h1>Vite + React</h1>
//       <div className="counter-section">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>


//       <div className="components-section">
//         {/* Include your components here */}
//         <GoogleCalendar />
//         <TodoGroceryList />
//         <TransitScheduler />
//       </div>

//       <p className="footer">
//         Click on the logos or explore the features to learn more!
//       </p>
//     </>
//   );
// }
// function App() {
//   return (
//     <>
//       <div className="header">
//         <h1>Welcome to TransiTask</h1>
//         <p>Manage your tasks, transit schedules, and calendar all in one place!</p>
//       </div>
      
//       {/*<GoogleCalendar /> */}
//        {/*<TodoGroceryList />*/} 
//       {/* <TransitScheduler /> */}
//     </>
//   );
// }
// export default App

// import { useState } from "react";
// import TodoGroceryList from "./components/TodoGroceryList.jsx";
// // import GoogleCalendar from "./components/GoogleCalendar.jsx";
// // import TransitScheduler from "./components/TransitScheduler.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="header">
//         <h1>Welcome to TransiTask</h1>
//         <p>Manage your tasks, transit schedules, and calendar all in one place!</p>
//       </div>
//       <div className="counter-section">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR.
//         </p>
//       </div>
//       <div className="components-section">
//         {/* Include your components here */}
//         <TodoGroceryList />
//         {/* <GoogleCalendar /> */}
//         {/* <TransitScheduler /> */}
//       </div>
//       <p className="footer">
//         Click on the logos or explore the features to learn more!
//       </p>
//     </>
//   );
// }

// export default App;

//     return (
//         <div className="app-container">
//             <header>
//                 <h1>Welcome to TransiTask</h1>
//                 <p>Manage your tasks, transit schedules, and calendar events all in one place!</p>
//             </header>

//             <main>
//               <div className="side-by-side-container">
//                   <TodoGroceryList />
//               </div>
//               <div className="scheduler-section">
//                   <TransitScheduler />
//               </div>
//                 {/* Uncomment GoogleCalendar once working */}
//                 {/* <GoogleCalendar /> */}
             
//             <footer>
//                 <p>&copy; 2025 TransiTask. Empowering your productivity!</p>
//             </footer>
//         </div>
//     );
// }







// import React from "react";
// import GoogleCalendar from "./components/GoogleCalendar"; // Ensure path is correct
// import TodoGroceryList from "./components/TodoGroceryList"; // Ensure path is correct
// import TransitScheduler from "./components/TransitScheduler"; // Ensure path is correct
// import Map from "./components/Map"; // Import the Map component
// import "./App.css"; // Make sure styling is applied

// function App() {
//   return (
//     <div className="app-container">
//         <header>
//             <h1>Welcome to TransiTask</h1>
//             <p>Manage your tasks, transit schedules, and calendar events all in one place!</p>
//         </header>

//         <main>
//             <div className="side-by-side-container">
//                 <TodoGroceryList />
//             </div>
//             <div className="scheduler-section">
//                 <TransitScheduler />
//             </div>
//             <div className="map-section">
//                 <Map /> {/* Added Map component */}
//             </div>
//             {/* Uncomment GoogleCalendar once working */}
//             {/* <GoogleCalendar /> */}
//         </main>

//         <footer>
//             <p>&copy; 2025 TransiTask. Empowering your productivity!</p>
//         </footer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import GoogleCalendar from "./components/GoogleCalendar"; // Ensure path is correct
// import TodoGroceryList from "./components/TodoGroceryList"; // Ensure path is correct
// import Legend from "./components/Legend"; // Import the Legend component
// import Map from "./components/Map"; // Import the Map component
// import "./App.css"; // Make sure styling is applied

// function App() {
//   return (
//     <div className="app-container">
//         <header>
//             <h1>Welcome to TransiTask</h1>
//             <p>Manage your tasks, map visualizations, and calendar events all in one place!</p>
//         </header>

//         <main>
//             <div className="side-by-side-container">
//                 <TodoGroceryList />
//             </div>
//             <Legend /> {/* Replaced TransitScheduler with Legend */}
//             <div className="map-section">
//                 <Map />
//             </div>
//             {/* Uncomment GoogleCalendar once working */}
//             {/* <GoogleCalendar /> */}
//         </main>

//         <footer>
//             <p>&copy; 2025 TransiTask. Empowering your productivity!</p>
//         </footer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Map from "./components/Map"; // Ensure the path is correct
// import Legend from "./components/Legend"; // Ensure the path is correct
// import "./App.css";

// function App() {
//     return (
//         <div className="app-container">
//             <header>
//                 <h1>Welcome to TransiTask</h1>
//                 <p>Customize your map by adding pins with your own labels!</p>
//             </header>

//             <main>
//                 <Legend />
//                 <div className="map-section">
//                     <Map />
//                 </div>
//             </main>

//             <footer>
//                 <p>&copy; 2025 TransiTask. Empowering your productivity!</p>
//             </footer>
//         </div>
//     );
// }

// export default App;
import React from "react";
import TodoGroceryList from "./components/TodoGroceryList"; // Ensure path is correct
import Legend from "./components/Legend"; // Ensure path is correct
import Map from "./components/Map"; // Import the Map component
import "./App.css"; // Make sure styling is applied
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleCalendar from './components/GoogleCalendar';

const CLIENT_ID = "870525980372-t02c9am2ofh3gqv13j2ijoes3434oh6d.apps.googleusercontent.com";

function App() {
    return (
        <div className="app-container">
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <header>
                <h1>Welcome to TransiTask</h1>
                <p>Your tool for tasks, productivity, and planning!</p>
            </header>

            <main>
                <div className="side-by-side-container">
                    <TodoGroceryList />
                    <GoogleCalendar />
                </div>
                <Legend />
                <div className="map-section">
                    <Map />
                </div>
            </main>

            <footer>
                <p>&copy; 2025 TransiTask. Empowering your productivity!</p>
            </footer>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
