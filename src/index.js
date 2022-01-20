import './style.css';
import { addTodo, editTodo, deleteTodo } from './modules/crud.js';
import { updateTodo, removeComleted } from './modules/update.js';
import Store from './modules/store.js';

const renderList = () => {
  const todoList = document.getElementById('todo-list');
  const todos = Store.getTodos();
  todos.forEach((element, index) => { element.index = index + 1; });
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    const content = `
    <li class="list-item" id="list${todos[i].index}" >
      <input id="${todos[i].index}" class="checkbox" type="checkbox" name="vehicle1" ${todos[i].completed ? 'checked' : ''}>
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

const crudTodos = () => {
  /*  EVENT LISTENERS add */
  const addBtn = document.getElementById('add-btn');
  const addInput = document.getElementById('todo-input');
  addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addTodo(addInput);
    renderList();
  });

  /*  EVENT LISTENERS remove */
  const todoList = document.getElementById('todo-list');
  todoList.addEventListener('click', (event) => {
    const deleteBtn = event.target;
    const deleteId = event.target.id;
    if (deleteBtn.classList.contains('delete')) {
      deleteTodo(deleteId);
      renderList();
    }
  });

  /*  EVENT LISTENERS edit input field */
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

    todoList.addEventListener('keyup', (event) => {
      const editId = event.target.id;
      const inputItem = event.target;
      editTodo(editId, inputItem);
    });
  });

  todoList.addEventListener('focusout', (event) => {
    const inputField = event.target;
    const listItem = inputField.parentElement;
    if (inputField.classList.contains('input-task1')) {
      const editBtn = listItem.childNodes[5];
      const deleteBtn = listItem.childNodes[7];
      setTimeout(() => {
        editBtn.classList.remove('hidden');
        deleteBtn.classList.add('hidden');
        inputField.classList.remove('textedit');
        inputField.readOnly = true;
      }, 200);
    }
  });

  /*  EVENT LISTENERS edit check box */
  todoList.addEventListener('input', (event) => {
    const checkBox = event.target;
    const checkId = checkBox.id;
    updateTodo(checkBox, checkId);
  });

  /*  EVENT LISTENERS delete completed todos */
  const removeCompleted = document.getElementById('remove-completed');
  removeCompleted.addEventListener('click', () => {
    removeComleted();
    renderList();
  });
};

crudTodos();
renderList();
