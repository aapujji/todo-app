import { getProjectTodos } from '../modules/data';
import { updateTodoList } from '../dom';

const createTodoList = (project: string) => {
    const projectTodos = getProjectTodos(project);
    updateTodoList(project, projectTodos);
};

export default createTodoList;
