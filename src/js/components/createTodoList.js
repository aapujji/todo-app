import { getProjectTodos } from "../modules/data";
import { updateTodoList } from "../dom";

const createTodoList = (project) => {
    const projectTodos = getProjectTodos(project);
    updateTodoList(project, projectTodos);
}

export default createTodoList;