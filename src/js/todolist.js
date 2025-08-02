const todoList = (title, todos = []) => {
    const id = crypto.randomUUID();
    const todolist = {};
    todolist.id = id;
    todolist.title = title;
    todolist.todos = todos;
    todolist.addTodo = (todo) => {
        todolist.todos.push(todo);
    }

    return todolist;
}

export default todoList;