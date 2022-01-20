export default class Todo {
  constructor(description, arr) {
    this.description = description;
    this.completed = false;
    this.index = arr.length + 1;
  }
}