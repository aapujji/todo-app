import { sidebar, projectH2, addProjectButton, modalBackdrop, showTodoDetailsModal, updateProjectLinks, updateTodoList } from "./dom";
import Input from "./utils/Input";
import { getData, getProjectTodos, createProject, deleteProject, createTodo, deleteTodo, toggleComplete } from "./modules/data";
import createTodoList from "./components/createTodoList";

const getClosest = (elem, parent) => {
    return elem.closest(parent);
}

const handleDisplayProjectInput = (target) => {
    target.classList.add("hidden");
    const input = Input("text", "seamless add-project", {id: "addProjectInput"});
    sidebar.appendChild(input);
    input.focus();
}

const handleAddProject = (target) => {
    target.classList.add("hidden");
    addProjectButton.classList.remove("hidden");
    const projects = createProject(target.value);
    updateProjectLinks(projects);
    updateTodoList(projectH2.textContent, []);
    target.value = "";
}

const handleAddTodo = (target) => {
    createTodo(target.value, projectH2.textContent);
    const todos = getProjectTodos(projectH2.textContent);
    updateTodoList(projectH2.textContent, todos);
    target.value = "";
}

const handleDeleteTodo = (target) => {
    deleteTodo(getClosest(target, ".todo").dataset.uuid);
    const todos = getProjectTodos(projectH2.textContent);
    updateTodoList(projectH2.textContent, todos);
}

const handleCompleteTodo = (target) => {
    const uuid = getClosest(target, ".todo").dataset.uuid;
    toggleComplete(uuid);
}

const handleDeleteProject = (target) => {
    const project = getClosest(target, ".list-item");
    const projects = deleteProject(project.dataset.id);
    updateProjectLinks(projects);
    const todos = getProjectTodos("default");
    updateTodoList("default", todos);
}

const setEventListeners = () => {
    document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.matches("#addProject")) {
            handleDisplayProjectInput(target);
        } else if (target.matches(".project-link")) {
            createTodoList(target.textContent);
        } else if (target.matches(".todo-text, .todo-title, .todo-desc")) {
            const todo = getClosest(target, ".todo");
            showTodoDetailsModal(todo.dataset.uuid);
        } else if (target.matches(".close-modal")) {
            modalBackdrop.classList.add("hidden");
        } else if (target.matches(".delete-todo")) {
            handleDeleteTodo(target);
        } else if (target.matches(".delete-project")) {
            handleDeleteProject(target);
        } else if (target.matches(".todo-checkbox")) {
            handleCompleteTodo(target);
        }
    });

    document.addEventListener("keypress", (e) => {
        const target = e.target;
        if (e.key === "Enter") {
            e.preventDefault();
            if (target.matches("#addProjectInput") && target.value) {
                handleAddProject(target);
            } else if (target.matches("#todoInput")) {
                handleAddTodo(target);
            }
        }
    });
}

export default setEventListeners;