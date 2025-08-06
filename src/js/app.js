import { getData } from "./modules/data";
import { updateTodoList } from './dom';
import { updateProjectLinks } from "./dom";
import setEventListeners from "./events";
import '../css/app.css';

const data = getData();
const projects = data.projects;
const activeProject = projects[0];
const todosData = data.todos;
const activeTodos = todosData.filter(todo => todo.project === activeProject);

updateProjectLinks(projects);
updateTodoList(activeProject, activeTodos);

setEventListeners();