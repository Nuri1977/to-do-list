import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';

/* VARIABLES */
const todos = [
  {
    description: 'Task number one',
    completed: false,
    index: 1,
  },
  {
    description: 'Task number three',
    completed: true,
    index: 3,
  },
  {
    description: 'Task number four',
    completed: true,
    index: 4,
  },
  {
    description: 'Task number two',
    completed: false,
    index: 2,
  },
];

const todoList = document.getElementById('todo-list');

const renderList = () => {
  todos.sort((x, y) => x.index - y.index);
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    const content = `
    <li class="list-item">
      <input type="checkbox" name="vehicle1" value=${todos[i].completed}>
      <h4 class="todo-item">${todos[i].description}</h4>
      <i id=${todos[i].index} class="fas fa-trash-alt"></i>
    </li>
    `;
    todoList.innerHTML += content;
  }
};

renderList();