import renderList from './render-list.js';
import { addTodo, deleteTodo } from './crud.js';

document.body.innerHTML = `
<main class="main">
<h1>Today's To Do</h1>
<div class="card">
  <h4 class="card-item">Demo<i class="fas fa-sync-alt"></i></h4>
  <form class="card-item">
    <input id="todo-input" class="input-task" type="text" placeholder="Add to your list..." required>
    <button type="submit" id="add-btn">
      <i class="fas fa-plus"></i>
    </button>
  </form>
  <ul id="todo-list" class="card-ul">
  </ul>
  <div class="card-item btn-item">
    <button id="remove-completed" class="btn" type="button">Clear all Completed</button>
  </div>
</div>
</main>
`;

describe('testind Dom functionality', () => {
  it('Testing if one list items are added to dom', () => {
    addTodo('task number 1');
    renderList();
    expect(document.querySelectorAll('li').length).toBe(1);
  });

  it('Testing if two list items are added to dom', () => {
    addTodo('task number 2');
    renderList();
    expect(document.querySelectorAll('li').length).toBe(2);
  });
  it('Testing if one item is removed from the DOM', () => {
    deleteTodo(2);
    renderList();
    expect(document.querySelectorAll('li').length).toBe(1);
  });
  it('Testing if one item is removed from the DOM', () => {
    deleteTodo(2);
    renderList();
    expect(document.querySelectorAll('li').length).toBe(1);
  });
});
