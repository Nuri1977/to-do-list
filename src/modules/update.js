import Store from './store.js';

export function updateTodo(checkBox, checkId) {
  const todos = Store.getTodos();
  if (checkBox.classList.contains('checkbox')) {
    if (checkBox.checked === true) {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].index === +checkId) {
          todos[i].completed = true;
          Store.setTodos(todos);
        }
      }
    } else {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].index === +checkId) {
          todos[i].completed = false;
          Store.setTodos(todos);
        }
      }
    }
  }
}

export function removeComleted() {
  let todos = Store.getTodos();
  todos = todos.filter((element) => element.completed !== true);
  Store.setTodos(todos);
}
