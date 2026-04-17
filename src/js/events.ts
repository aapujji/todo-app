import {
    sidebar,
    projectH2,
    addProjectButton,
    modalBackdrop,
    showTodoDetailsModal,
    showEditTodoModal,
    getTodoUpdates,
    updateProjectLinks,
    updateTodoList,
} from './dom';
import Input from './utils/Input';
import {
    getData,
    getProjectTodos,
    createProject,
    deleteProject,
    createTodo,
    deleteTodo,
    toggleComplete,
    priorityOptions,
    updateTodo,
} from './modules/data';
import createTodoList from './components/createTodoList';

const getClosest = (elem: HTMLElement, parent: string): HTMLElement => {
    const closest = elem.closest(parent);
    if (!closest) throw new Error(`Parent ${parent} does not exist`);
    return closest as HTMLElement;
};

const handleDisplayProjectInput = (target: HTMLElement) => {
    target.classList.add('hidden');
    const input = Input('text', 'seamless add-project', {
        id: 'addProjectInput',
    });
    sidebar.appendChild(input);
    input.focus();
};

const handleAddProject = (target: HTMLInputElement) => {
    target.classList.add('hidden');
    addProjectButton.classList.remove('hidden');
    const projects = createProject(target.value);
    updateProjectLinks(projects);
    updateTodoList(target.value, []);
    target.value = '';
};

const handleAddTodo = (target: HTMLInputElement) => {
    createTodo(target.value, projectH2.textContent);
    const todos = getProjectTodos(projectH2.textContent);
    updateTodoList(projectH2.textContent, todos);
    target.value = '';
};

const handleDeleteTodo = (target: HTMLElement) => {
    const closest = getClosest(target, '.todo').dataset.uuid;
    if (closest) {
        deleteTodo(closest);
    }
    const todos = getProjectTodos(projectH2.textContent);
    updateTodoList(projectH2.textContent, todos);
};

const handleCompleteTodo = (target: HTMLInputElement) => {
    const closest = getClosest(target, '.todo').dataset.uuid;
    if (closest) {
        toggleComplete(closest);
    }
};

const handleDeleteProject = (target: HTMLInputElement) => {
    const project = getClosest(target, '.list-item');
    const projectId = project ? project.dataset.id : '';
    const projects = projectId ? deleteProject(projectId) : [];
    updateProjectLinks(projects);
    const todos = getProjectTodos('default');
    updateTodoList('default', todos);
};

const setEventListeners = () => {
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.matches('#addProject')) {
            handleDisplayProjectInput(target);
        } else if (target.matches('.project-link')) {
            createTodoList(target.textContent);
        } else if (target.matches('.todo-text, .todo-title, .todo-desc')) {
            const todo = getClosest(target, '.todo');
            const uuid = todo ? todo.dataset.uuid : '';
            if (uuid) showTodoDetailsModal(uuid);
        } else if (target.matches('.close-modal')) {
            modalBackdrop.classList.add('hidden');
            getClosest(target, '.modal').classList.add('hidden');
        } else if (target.matches('.edit-button')) {
            const todo = getClosest(target, '.todo');
            const projects = getData().projects;
            const uuid = todo ? todo.dataset.uuid : '';
            if (uuid) showEditTodoModal(uuid, priorityOptions, projects);
        } else if (target.matches('.delete-button')) {
            handleDeleteTodo(target);
        } else if (target.matches('.delete-project')) {
            handleDeleteProject(target);
        } else if (target.matches('.todo-checkbox')) {
            handleCompleteTodo(target);
        } else if (target.matches('.save-todo')) {
            console.log(getTodoUpdates());
            const uuid = getClosest(target, '.modal').dataset.uuid;
            if (uuid) updateTodo(uuid, getTodoUpdates());
            modalBackdrop.classList.add('hidden');
            getClosest(target, '.modal').classList.add('hidden');
        }
    });

    document.addEventListener('keypress', (e) => {
        const target = e.target as HTMLInputElement;
        if (e.key === 'Enter') {
            e.preventDefault();
            if (target.matches('#addProjectInput') && target.value) {
                handleAddProject(target);
            } else if (target.matches('#todoInput')) {
                handleAddTodo(target);
            }
        }
    });
};

export default setEventListeners;
