const todo = (title, completed = false) => {
    const id = crypto.randomUUID();

    let todo = {};
    todo.id = id;
    todo.title = title;
    todo.completed = completed;

    return todo;
}

export default todo;