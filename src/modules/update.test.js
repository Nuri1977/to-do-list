import Store from './store.js';
import { updateTodo, removeComleted } from './update.js';
import { addTodo } from './crud.js';

describe('testind update functionality', () => {
  it('test completed first task', () => {
    addTodo('My first task');
    addTodo('My second task');
    addTodo('My third task');
    addTodo('My fourth task');
    const checkBox = 1;
    updateTodo(checkBox, true);
    const todos = Store.getTodos();
    expect(todos[0].completed).toBe(true);
  });
  it('test completed first task', () => {
    const checkBox = 1;
    updateTodo(checkBox, false);
    const todos = Store.getTodos();
    expect(todos[0].completed).toBe(false);
  });

  it('test completed second task', () => {
    const checkBox = 2;
    updateTodo(checkBox, true);
    const todos = Store.getTodos();
    expect(todos[1].completed).toBe(true);
  });
});

describe('testing deleting completed tasks', () => {
  it('test deleting completed tasks', () => {
    removeComleted();
    const todos = Store.getTodos();
    expect(todos.length).toBe(3);
  });
});