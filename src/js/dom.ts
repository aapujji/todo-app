import { ProjectLink } from './components/ProjectLink';
import { TodoListItem } from './components/TodoListItem';
import { findTodo } from './modules/data';
import Option from './utils/Option';
import { Todo } from './modules/todo';
import { PriorityOption } from './modules/data';

const sidebar = document.querySelector('.sidebar') as HTMLElement;
const todoDetailsModal = document.querySelector('#todoDetails') as HTMLElement;
const todoEditModal = document.querySelector('#editTodoModal') as HTMLElement;
const todoTitleInput = todoEditModal.querySelector(
    '.todo-title-input',
) as HTMLInputElement;
const todoDescTextarea = todoEditModal.querySelector(
    '.todo-desc-textarea',
) as HTMLInputElement;
const todoPrioritySelect = todoEditModal.querySelector(
    '.todo-priority-select',
) as HTMLInputElement;
const todoProjectSelect = todoEditModal.querySelector(
    '.todo-project-select',
) as HTMLInputElement;
const todoDueDateInput = todoEditModal.querySelector(
    '.todo-duedate-input',
) as HTMLInputElement;
const modalBackdrop = document.querySelector('.modal-backdrop') as HTMLElement;
const projectsUl = document.querySelector('.projects') as HTMLElement;
const projectH2 = document.querySelector('.project-title') as HTMLElement;
const todosUl = document.querySelector('.todos') as HTMLElement;
const addProjectButton = document.querySelector(
    '#addProject',
) as HTMLButtonElement;

const showTodoDetailsModal = (uuid: string) => {
    const todo = findTodo(uuid) as Object as Todo;
    if (todoDetailsModal) {
        todoDetailsModal.querySelector('#modalTodoTitle')!.textContent =
            todo.title;
    }
    if (todo.description)
        todoDetailsModal.querySelector('#modalTodoDesc')!.textContent =
            todo.description;
    if (todo.priority)
        todoDetailsModal.querySelector('#modalTodoPriority')!.textContent =
            String(todo.priority);
    if (todo.dueDate)
        todoDetailsModal.querySelector('#modalTodoDueDate')!.textContent =
            todo.dueDate;
    if (todo.project)
        todoDetailsModal.querySelector('#modalTodoProject')!.textContent =
            todo.project;
    todoDetailsModal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
};

const showEditTodoModal = (
    uuid: string,
    priorityOptions: PriorityOption[],
    projects: string[],
) => {
    const todo = findTodo(uuid) as Todo;
    todoTitleInput.value = todo.title;
    if (todo.description) todoDescTextarea.value = todo.description;
    priorityOptions.map((priority) => {
        const option = Option(priority.name, 'priority-option', {
            value: priority.id,
        });
        if (todo.priority === priority.id) option.selected = true;
        todoPrioritySelect.appendChild(option);
    });
    if (todo.dueDate) todoDueDateInput.value = todo.dueDate;
    projects.map((project: string) => {
        const projectId = project.split(' ').join('-');
        const option = Option(project, 'project-option', { value: projectId });
        if (todo.project === project) option.selected = true;
        todoProjectSelect.appendChild(option);
    });
    todoEditModal.dataset.uuid = uuid;
    todoEditModal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
};

const updateProjectLinks = (projects: string[]) => {
    projectsUl.textContent = '';
    projects.map((project) => {
        const li = ProjectLink(project);
        projectsUl.appendChild(li);
    });
};

const updateTodoList = (project: string, todos: Todo[]) => {
    todosUl.textContent = '';
    projectH2.textContent = project;
    todos.map((todo) => {
        todosUl.appendChild(TodoListItem(todo));
    });
};

const getTodoUpdates = () => {
    type Update = {
        title: string;
        description: string;
        dueDate: string;
        priority: string;
        project: string;
    };
    const updates = {} as Update;

    updates.title = todoTitleInput.value;
    updates.description = todoDescTextarea.value;
    updates.dueDate = todoDueDateInput.value;
    updates.priority = todoPrioritySelect.value;
    updates.project = todoProjectSelect.value;

    return updates;
};

export {
    sidebar,
    modalBackdrop,
    projectsUl,
    projectH2,
    todosUl,
    addProjectButton,
    showTodoDetailsModal,
    showEditTodoModal,
    getTodoUpdates,
    updateProjectLinks,
    updateTodoList,
};
