

import React, { useState, useEffect } from "react";

const TodoGroceryList = () => {
  const [todoList, setTodoList] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [input, setInput] = useState("");
  const [groceryInput, setGroceryInput] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    const savedGroceryList = JSON.parse(localStorage.getItem("groceryList")) || [];
    setTodoList(savedTodoList);
    setGroceryList(savedGroceryList);
  }, []);

  const addToDoItem = () => {
    if (input.trim()) {
      const updatedList = [...todoList, { text: input, completed: false }];
      setTodoList(updatedList);
      setInput("");
      localStorage.setItem("todoList", JSON.stringify(updatedList));
    }
  };

  const addGroceryItem = () => {
    if (groceryInput.trim()) {
      const updatedList = [...groceryList, { text: groceryInput, completed: false }];
      setGroceryList(updatedList);
      setGroceryInput("");
      localStorage.setItem("groceryList", JSON.stringify(updatedList));
    }
  };

  const toggleGroceryItem = (index) => {
    const updatedList = [...groceryList];
    updatedList[index].completed = !updatedList[index].completed;
    setGroceryList(updatedList);
    localStorage.setItem("groceryList", JSON.stringify(updatedList));
  };

  const removeToDoItem = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  const removeGroceryItem = (index) => {
    const updatedList = groceryList.filter((_, i) => i !== index);
    setGroceryList(updatedList);
    localStorage.setItem("groceryList", JSON.stringify(updatedList));
  };

  return (
    <div className="list-container">
      {/* To-Do List */}
      <div className="list-box">
        <h2>To-Do List</h2>
        <input
          type="text"
          placeholder="Add Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDoItem}>Add Task</button>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>
              <span>{item.text}</span>
              <button onClick={() => removeToDoItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Grocery List */}
      <div className="list-box">
        <h2>Grocery List</h2>
        <input
          type="text"
          placeholder="Add Grocery Item"
          value={groceryInput}
          onChange={(e) => setGroceryInput(e.target.value)}
        />
        <button onClick={addGroceryItem}>Add Grocery Item</button>
        <ul>
          {groceryList.map((item, index) => (
            <li key={index}>
              <span
                className={item.completed ? "completed" : ""}
                onClick={() => toggleGroceryItem(index)}
              >
                {item.text}
              </span>
              <button onClick={() => removeGroceryItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoGroceryList;
