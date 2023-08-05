// Array to store to-do items  
let todos = [];

// Function to add a new to-do item
function addTodo(text) {
  todos.push({
    text,
    completed: false  
  });
}

// Function to mark a to-do item as completed
function completeTodo(index) {
  todos[index].completed = true;
}

// Function to remove a to-do item
function removeTodo(index) {
  todos.splice(index, 1);
}

// Display todos on the page
function displayTodos() {
  let list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    let item = document.createElement('li');
    item.innerText = todo.text;

    if(todo.completed) {
      item.classList.add('completed');
    }

    item.addEventListener('click', () => completeTodo(index));
    item.addEventListener('dblclick', () => removeTodo(index));

    list.appendChild(item);
  });
}

// Example usage
addTodo('Buy groceries');
addTodo('Go to gym');
addTodo('Finish project');

displayTodos();