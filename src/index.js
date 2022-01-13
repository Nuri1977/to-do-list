import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import { addTodo, deleteTodo } from './crud.js';

/* VARIABLES */
const localTodos = localStorage.getItem('todosStore');
let todos = [
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

if (localTodos) {
  todos = JSON.parse(localTodos);
}

const todoList = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');
const addInput = document.getElementById('todo-input');

/* CLASSES */
class Todo {
  constructor(description, arr) {
    this.description = description;
    this.completed = false;
    this.index = arr.length + 1;
  }
}

/* FUNCTIONS */

const renderList = () => {
  todos.forEach((element, index) => {
    element.index = index + 1;
  });
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    const content = `
    <li class="list-item"  >
      <input type="checkbox" name="vehicle1" value=${todos[i].completed}>
      <input id="${todos[i].index}" class="input-task1" type="text" readonly value="${todos[i].description}"/>
      <button id="${todos[i].index}" class="btn-remove delete">
        <i id="${todos[i].index}" class="fas fa-trash-alt delete"></i>
      </button>
    </li>
    `;
    todoList.innerHTML += content;
  }
};

renderList();

/*  EVENT LISTENERS add */
addBtn.addEventListener('click', () => {
  addTodo(addInput, todos, Todo);
  addInput.value = '';
  localStorage.setItem('todosStore', JSON.stringify(todos));
  renderList();
});

/*  EVENT LISTENERS remove */
todoList.addEventListener('click', (event) => {
  const deleteId = (event.path[1].id);
  const editElement = (event.path[2]);
  if (editElement.classList.contains('delete')) {
    todos = todos.filter((element) => element.index !== +deleteId);
    localStorage.setItem('todosStore', JSON.stringify(todos));
    renderList();
  }
});
