import './style.css';
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
    <li class="list-item" id="${todos[i].index}" >
      <input type="checkbox" name="vehicle1" value=${todos[i].completed}>
      <input id="${todos[i].index}" class="input-task1" type="text" readonly value="${todos[i].description}"/>
      <button id="${todos[i].index}" class="btn-remove edit">
        <i id="${todos[i].index}" class="fas fa-ellipsis-v edit"></i>
      </button>
      <button id="${todos[i].index}" class="btn-remove delete hidden">
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
  const listItem = event.target;
  const deleteElement = listItem.childNodes[7];
  const deleteId = (event.target.id);
  console.log(listItem);
  console.log(deleteId);
  console.log(deleteElement);
  /*
  if (deleteElement.classList.contains('delete')) {
    todos = todos.filter((element) => element.index !== +deleteId);
    localStorage.setItem('todosStore', JSON.stringify(todos));
    renderList();
  }
  */
});

/*  EVENT LISTENERS edit */
todoList.addEventListener('click', (event) => {
  const inputField = event.target;
  const listItem = (event.path[1]);
  const deleteBtn = listItem.childNodes[7];
  const editBtn = listItem.childNodes[5];
  if (inputField.classList.contains('input-task1')) {
    editBtn.classList.add('hidden');
    deleteBtn.classList.remove('hidden');
    inputField.classList.add('textedit');
    inputField.readOnly = false;
    inputField.focus();
    inputField.setSelectionRange(inputField.value.length, inputField.value.length);
  }
});

todoList.addEventListener('keyup', (event) => {
  const editId = event.target.id;
  const inputItem = event.target;
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].index === +editId) {
      todos[i].description = inputItem.value.trim();
    }
  }
  localStorage.setItem('todosStore', JSON.stringify(todos));
});

todoList.addEventListener('focusout', (event) => {
  const inputField = event.target;
  const listItem = inputField.parentElement;
  const relTarget = event.relatedTarget;
  /*
  let checkDelete = false;
  if (relTarget.classList.contains('delete')) {
    checkDelete = true;
    return;
  }
  */
  if (inputField.classList.contains('input-task1')) {
    const editBtn = listItem.childNodes[5];
    const deleteBtn = listItem.childNodes[7];
    editBtn.classList.remove('hidden');
    deleteBtn.classList.add('hidden');
    inputField.classList.remove('textedit');
    inputField.readOnly = true;
    /*
    console.log(inputField);
    console.log(listItem);
    console.log(editBtn);
    console.log(deleteBtn);
    */
  }
});
