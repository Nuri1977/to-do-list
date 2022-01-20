import Store from './store.js';
import Todo from './class-todo.js';

export const addTodo = (addInput) => {
  if (addInput.value !== '') {
    const todos = Store.getTodos();
    const newTodo = new Todo(addInput, todos);
    todos.push(newTodo);
    Store.setTodos(todos);
  }
};

export const deleteTodo = (deleteID) => {
  let todos = Store.getTodos();
  todos = todos.filter((element) => element.index !== +deleteID);
  Store.setTodos(todos);
};

export function editTodo(editId, inputItem) {
  const todos = Store.getTodos();
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].index === +editId) {
      todos[i].description = inputItem;
    }
  }
  Store.setTodos(todos);
}