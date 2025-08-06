import { format } from "date-fns";

const todo = (title, project = "default", description = "", completed = false, dueDate, priority = 3) => {
    const id = crypto.randomUUID();

    let todo = {};
    todo.id = id;
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    todo.dueDate = dueDate ? format(dueDate, "MM/dd/yyyy") : format(new Date(), "MM/dd/yyyy");
    todo.priority = priority;
    todo.project = project;

    return todo;
}

export default todo;