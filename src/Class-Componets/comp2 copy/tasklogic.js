// Define UI elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filter');
const clearButton = document.getElementById('clearButton');

// Initialize list of tasks
let tasks = [];

// Function to render tasks
function renderTasks(tasks) {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      tasks[index].completed = checkbox.checked;
      renderTasks(tasks.filter(filterTasks));
    });

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.className = task.completed ? 'completed' : '';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks(tasks.filter(filterTasks));
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Function to add task
function addTask() {
  const text = taskInput.value.trim();
  if (text !== '') {
    tasks.push({ text, completed: false });
    taskInput.value = '';
    renderTasks(tasks.filter(filterTasks));
  }
}

// Function to filter tasks
function filterTasks(task) {
  const filter = document.querySelector('.filter.selected').dataset.filter;
  switch (filter) {
    case 'all':
      return true;
    case 'active':
      return !task.completed;
    case 'completed':
      return task.completed;
  }
}

// Add event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => button.classList.remove('selected'));
    button.classList.add('selected');
    renderTasks(tasks.filter(filterTasks));
  });
});

clearButton.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.completed);
  renderTasks(tasks.filter(filterTasks));
});

// Initial rendering
renderTasks(tasks);

import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

//  export default function Todocom() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }