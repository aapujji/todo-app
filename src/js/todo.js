const todo = (title, description = "", completed = false, dueDate = false, priority = 0) => {
    const id = crypto.randomUUID();

    let todo = {};
    todo.id = id;
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    todo.dueDate = dueDate;
    todo.priority = priority;

    return todo;
}

export default todo;