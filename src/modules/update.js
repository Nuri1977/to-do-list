import Store from './store.js';

export function updateTodo(checkId, isCompleted) {
  const todos = Store.getTodos();
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].index === +checkId) {
      todos[i].completed = isCompleted;
      Store.setTodos(todos);
    }
  }
}

export function removeComleted() {
  let todos = Store.getTodos();
  todos = todos.filter((element) => element.completed !== true);
  Store.setTodos(todos);
}
