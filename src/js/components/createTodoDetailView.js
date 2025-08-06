import { getData, setData } from "../modules/data";
import createTodoList from "./createTodoList";

export const createTodoDetailView = (uuid) => {
    const data = getData();
    const todos = data.todos;
    const todo = todos.find(item => item.id === uuid);
    return todo;
};