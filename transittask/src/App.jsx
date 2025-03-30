
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
