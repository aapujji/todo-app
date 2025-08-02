const todo = (title, completed = false, dueDate = false, priority = 3) => {
    const id = crypto.randomUUID();

    let todo = {};
    todo.id = id;
    todo.title = title;
    todo.completed = completed;
    todo.dueDate = dueDate;
    todo.priority = priority;

    return todo;
}

export default todo;