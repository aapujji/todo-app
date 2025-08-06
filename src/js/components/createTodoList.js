import { getData } from "../modules/data";
import { updateTodoList } from "../dom";

const createTodoList = (project) => {
    const data = getData();
    const todos = data.todos;
    const projectTodos = todos.filter(todo => todo.project === project);
    updateTodoList(project, projectTodos);
}

export default createTodoList;