import Store from './store.js';

const renderList = () => {
  const todoList = document.getElementById('todo-list');
  const todos = Store.getTodos();
  Store.updateIndex(todos);
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

export default renderList;