const LocalStorage = require('./local-storage-mock.js');

global.localStorage = new LocalStorage();

export default class Store {
  static getTodos = () => {
    const storeTodos = localStorage.getItem('todosStore');
    if (storeTodos) {
      return JSON.parse(storeTodos);
    } return [];
  };

  static setTodos = (todos) => {
    localStorage.setItem('todosStore', JSON.stringify(todos));
  }

  static updateIndex = (todos) => {
    todos.forEach((element, index) => {
      element.index = index + 1;
    });
  }
}