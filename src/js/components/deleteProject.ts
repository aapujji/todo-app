import { getData, setData, deleteTodo } from '../modules/data';
import { updateProjectLinks } from '../dom';

export const deleteProject = (project: string) => {
    const data = getData();
    const projects = data.projects;
    const todos = data.todos;
    const projectName = project.split('-').join(' ');
    projects.map((proj: string, index: number) => {
        if (proj === projectName) {
            projects.splice(index, 1);
        }
    });
    todos.map((todo) => {
        if (todo.project === project) {
            deleteTodo(todo.id);
        }
    });
    setData('projects', projects);
    updateProjectLinks(projects);
};
