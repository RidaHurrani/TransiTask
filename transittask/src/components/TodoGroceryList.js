import React, { useState } from "react";

const TodoGroceryList = () => {
  const [todoList, setTodoList] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [input, setInput] = useState("");
  const [groceryInput, setGroceryInput] = useState("");

  const addToDoItem = () => {
    setTodoList([...todoList, input]);
    setInput("");
    localStorage.setItem("todoList", JSON.stringify([...todoList, input]));
  };

  const addGroceryItem = () => {
    setGroceryList([...groceryList, groceryInput]);
    setGroceryInput("");
    localStorage.setItem("groceryList", JSON.stringify([...groceryList, groceryInput]));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add To-Do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDoItem}>Add To-Do</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Grocery List</h2>
      <input
        type="text"
        placeholder="Add Grocery Item"
        value={groceryInput}
        onChange={(e) => setGroceryInput(e.target.value)}
      />
      <button onClick={addGroceryItem}>Add Grocery</button>
      <ul>
        {groceryList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoGroceryList;
