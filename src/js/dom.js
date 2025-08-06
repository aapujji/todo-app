import { createTodoDetailView } from "./components/createTodoDetailView";

import { ProjectLink } from "./components/projectLink";
import { TodoListItem } from "./components/TodoListItem";

const sidebar = document.querySelector(".sidebar");
const todoDetailsModal = document.querySelector("#todoDetails");
const modalBackdrop = document.querySelector(".modal-backdrop");
const projectsUl = document.querySelector(".projects");
const projectH2 = document.querySelector(".project-title");
const todosUl = document.querySelector(".todos");
const addProjectButton = document.querySelector("#addProject");


const showTodoDetailsModal = (uuid) => {
    const todo = createTodoDetailView(uuid);
    todoDetailsModal.querySelector("#modalTodoTitle").textContent = todo.title;
    modalBackdrop.classList.toggle("hidden");
    if (todo.description) todoDetailsModal.querySelector("#modalTodoDesc").textContent = todo.description;
    if (todo.priority) todoDetailsModal.querySelector("#modalTodoPriority").textContent = todo.priority;
    if (todo.dueDate) todoDetailsModal.querySelector("#modalTodoDueDate").textContent = todo.dueDate;
    if (todo.project) todoDetailsModal.querySelector("#modalTodoProject").textContent = todo.project;
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

export {
    sidebar,
    modalBackdrop,
    projectsUl,
    projectH2,
    todosUl,
    addProjectButton,
    showTodoDetailsModal,
    updateProjectLinks,
    updateTodoList,
}