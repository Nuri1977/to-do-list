import { addTodo, deleteTodo, editTodo } from './crud.js';
import Store from './store.js';

describe('testind add functionality', () => {
  it('test adding new todo', () => {
    addTodo('task number 1');
    const todos = Store.getTodos();
    expect(todos[0].description).toBe('task number 1');
  });
  it('test adding new todo and check total number', () => {
    addTodo('task number 2');
    const todos = Store.getTodos();
    expect(todos.length).toBe(2);
  });
  it('test adding new todo and check total number', () => {
    addTodo('task number 3');
    const todos = Store.getTodos();
    expect(todos.length).toBe(3);
  });
});

describe('testing delete functionality', () => {
  it('delete todo with index 3', () => {
    const deleteID = 3;
    deleteTodo(deleteID);
    const todos = Store.getTodos();
    expect(todos.length).toBe(2);
  });
});

describe('testing edit functionality', () => {
  it('edit todo with index 1', () => {
    const editID = 1;
    editTodo(editID, 'task 1 edited');
    const todos = Store.getTodos();
    expect(todos[0].description).toBe('task 1 edited');
  });
  it('edit todo with index 2', () => {
    const editID = 2;
    editTodo(editID, 'task 2 edited');
    const todos = Store.getTodos();
    expect(todos[1].description).toBe('task 2 edited');
  });
});
