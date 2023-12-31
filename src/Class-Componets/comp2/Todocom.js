import React, { useState } from "react";
import "./App.css";

const Todocom = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), task, completed: false }]);
  };

  const getFilteredTasks = () => {
    const filter = window.location.hash.substring(1);

    switch (filter) {
      case "Active":
        return tasks.filter((task) => !task.completed);
      case "Completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }}
      />
      <button onClick={() => addTask("New Task")}>Add Task</button>
      <div className="tasks">
        {getFilteredTasks().map((task) => (
          <div className="task" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {}}
            />
            <span>{task.task}</span>
            <button onClick={() => {}}>Delete</button>
          </div>
        ))}
      </div>
      <div className="filters">
        <a href="#/">All</a>
        <a href="#/Active">Active</a>
        <a href="#/Completed">Completed</a>
      </div>
      <button onClick={() => {}}>Clear Completed</button>
      <input type="text" name="list" ></input>
      <input type="text" name="list2"></input>
    </div>
  );
};

export default Todocom;