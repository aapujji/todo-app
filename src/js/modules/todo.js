import { format } from "date-fns";

const todo = (title, description = "", completed = false, dueDate, priority = "low") => {
    const id = crypto.randomUUID();

    let todo = {};
    todo.id = id;
    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    todo.dueDate = dueDate ? format(dueDate, "MM/dd/yyyy") : format(new Date(), "MM/dd/yyyy");
    todo.priority = priority;

    return todo;
}

export default todo;