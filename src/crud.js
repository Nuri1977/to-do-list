export function addTodo(addInput, todos, TodoClass) {
  if (addInput.value !== '') {
    const newTodo = new TodoClass(addInput.value, todos);
    todos.push(newTodo);
  } else {
    alert('Canot add emty field');
  }
}

export function deleteTodo(todos, deleteId) {
  todos = todos.filter((element) => element.index !== +deleteId);
}