import React from "react";
import GoogleCalendar from "./components/GoogleCalendar";
import TransitScheduler from "./components/TransitScheduler";
import TodoGroceryList from "./components/TodoGroceryList";

const App = () => {
  return (
    <div>
      <h1>TransiTask: Your Urban Transit & Task Planner</h1>
      <GoogleCalendar />
      <TransitScheduler />
      <TodoGroceryList />
    </div>
  );
};

export default App;
