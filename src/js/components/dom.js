import { createLink } from "./createLink";
import { createTodo } from "./createTodo";
import { listInput } from "./createListInput";
import { actionsDropdown } from "./actionsDropdownUI";
import { createTodoDetailView } from "./createTodoDetailView";

const sidebar = document.querySelector(".sidebar");
const editTodo = document.querySelector(".edit-todo");
const editTodoForm = editTodo.querySelector("form");
const todoTitle = editTodo.querySelector("#todoTitle");
const todoDescription = editTodo.querySelector("#todoDescription");
const todoDueDate = editTodo.querySelector("#todoDueDate");
const todoPriorityOptions = editTodo.querySelector("#todoPriority").querySelectorAll(".option");
const listsDiv = document.querySelector(".lists");
const listH2 = document.querySelector(".list-title");
const addListButton = document.querySelector(".add-list");
const todosDiv = document.querySelector(".todos");
const detailViewDiv = document.querySelector(".view-todo");

export {
    sidebar,
    listsDiv,
    addListButton,
    todosDiv,
    listH2,
    editTodo,
    editTodoForm,
    todoTitle,
    todoDescription,
    todoDueDate,
    todoPriorityOptions,
    detailViewDiv,
    createLink,
    createTodo,
    listInput,
    actionsDropdown,
    createTodoDetailView,
}