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

import GoogleCalendar from './components/GoogleCalendar';
import TodoGroceryList from './components/TodoGroceryList';
import TransitScheduler from './components/TransitScheduler';

function App() {
    return (
        <>
            <header>
                <h1>Welcome to TransiTask</h1>
                <p>Manage your tasks, transit schedules, and calendar events all in one place!</p>
            </header>
            <main>
            <TodoGroceryList />
            {/* <GoogleCalendar />  */}
            <TransitScheduler />
            </main>
            <footer>
                <p>Explore TransiTask features and simplify your day!</p>
            </footer>
        </>
    );
}

export default App;
