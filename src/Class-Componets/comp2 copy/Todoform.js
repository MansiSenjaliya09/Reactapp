import React, { useState } from 'react'

export default function Todoform() {

    const [name,setname] = useState();

  return (
<>
  <div class="container">
    <h1>My To-Do List</h1>
    <div className="input-container">
      <input type="text" id="taskInput" placeholder="Add new task"/>
      <button id="addButton">Add Task</button>
    </div>
    <div class="filter-container">
      <button className="filter" data-filter="all">All</button>
      <button className="filter" data-filter="active">Active</button>
      <button className="filter" data-filter="completed">Completed</button>
      <button id="clearButton">Clear Completed</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  </>
    
  )
}
