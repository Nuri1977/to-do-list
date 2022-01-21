import './style.css';
import { addTodo, editTodo, deleteTodo } from './modules/crud.js';
import { updateTodo, removeComleted } from './modules/update.js';
import renderList from './modules/render-list.js';

const crudTodos = () => {
  /*  EVENT LISTENERS add */
  const addBtn = document.getElementById('add-btn');
  const addInput = document.getElementById('todo-input');
  addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addTodo(addInput.value);
    addInput.value = '';
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
      editTodo(editId, inputItem.value.trim());
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
    if (checkBox.classList.contains('checkbox')) {
      if (checkBox.checked === true) {
        updateTodo(checkId, true);
      } else {
        updateTodo(checkId, false);
      }
    }
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
