const todoList = (title, todos = []) => {
    const id = crypto.randomUUID();
    const todolist = {};
    todolist.id = id;
    todolist.title = title;
    todolist.todos = todos;

    todolist.addTodo = (todo) => {
        todolist.todos.push(todo);
    }

    todolist.removeTodo = (todo) => {
        const index = todolist.todos.indexOf(todo);
        todolist.todos.splice(index, 1);
    }

    return todolist;
}

export default todoList;