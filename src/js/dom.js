import { ProjectLink } from "./components/projectLink";
import { TodoListItem } from "./components/TodoListItem";
import { findTodo } from "./modules/data";
import Option from "./utils/Option";

const sidebar = document.querySelector(".sidebar");
const todoDetailsModal = document.querySelector("#todoDetails");
const todoEditModal = document.querySelector("#editTodoModal");
const todoTitleInput = todoEditModal.querySelector(".todo-title-input");
const todoDescTextarea = todoEditModal.querySelector(".todo-desc-textarea");
const todoPrioritySelect = todoEditModal.querySelector(".todo-priority-select");
const todoProjectSelect = todoEditModal.querySelector(".todo-project-select");
const todoDueDateInput = todoEditModal.querySelector(".todo-duedate-input");
const modalBackdrop = document.querySelector(".modal-backdrop");
const projectsUl = document.querySelector(".projects");
const projectH2 = document.querySelector(".project-title");
const todosUl = document.querySelector(".todos");
const addProjectButton = document.querySelector("#addProject");

const showTodoDetailsModal = (uuid) => {
    const todo = findTodo(uuid);
    console.log(todo);
    todoDetailsModal.querySelector("#modalTodoTitle").textContent = todo.title;
    if (todo.description) todoDetailsModal.querySelector("#modalTodoDesc").textContent = todo.description;
    if (todo.priority) todoDetailsModal.querySelector("#modalTodoPriority").textContent = todo.priority;
    if (todo.dueDate) todoDetailsModal.querySelector("#modalTodoDueDate").textContent = todo.dueDate;
    if (todo.project) todoDetailsModal.querySelector("#modalTodoProject").textContent = todo.project;
    todoDetailsModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
}

const showEditTodoModal = (uuid, priorityOptions, projects) => {
    const todo = findTodo(uuid);
    todoTitleInput.value = todo.title;
    if (todo.description) todoDescTextarea.value = todo.description;
    priorityOptions.map((priority) => {
        const option = Option(priority.name, "priority-option", {value: priority.id});
        if (todo.priority === priority.id)
            option.selected = true;
        todoPrioritySelect.appendChild(option);
    });
    if (todo.dueDate) todoDueDateInput.value = todo.dueDate;
    projects.map((project) => {
        const projectId = project.split(" ").join("-");
        const option = Option(project, "project-option", {value: projectId})
        if (todo.project === project) 
            option.selected = true;
        todoProjectSelect.appendChild(option);
    })
    todoEditModal.dataset.uuid = uuid;
    todoEditModal.classList.remove("hidden");
    modalBackdrop.classList.remove("hidden");
}

const updateProjectLinks = (projects) => {
    projectsUl.textContent = "";
    projects.map((project) => {
        const li = ProjectLink(project);
        projectsUl.appendChild(li);
    });
};

const updateTodoList = (project, todos) => {
    todosUl.textContent = "";
    projectH2.textContent = project;
    todos.map((todo) => {
        todosUl.appendChild(TodoListItem(todo));
    });
};

const getTodoUpdates =() => {
    const updates = {};
    updates.title = todoTitleInput.value;
    updates.description = todoDescTextarea.value;
    updates.dueDate = todoDueDateInput.value;
    updates.priority = todoPrioritySelect.value;
    updates.project = todoProjectSelect.value;
    return updates;
}

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
}