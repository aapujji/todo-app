import { createLink } from "./createLink";
import { createTodo } from "./createTodo";
import { listInput } from "./createListInput";
import { actionsDropdown } from "./actionsDropdownUI";

const sidebar = document.querySelector(".sidebar");
const editTodo = document.querySelector(".edit-todo");
const todoTitle = editTodo.querySelector("#todoTitle");
const todoDescription = editTodo.querySelector("#todoDescription");
const todoDueDate = editTodo.querySelector("#todoDueDate");
const todoPriorityOptions = editTodo.querySelector("#todoPriority").querySelectorAll(".option");
const listsDiv = document.querySelector(".lists");
const listH2 = document.querySelector(".list-title");
const addListButton = document.querySelector(".add-list");
const todosDiv = document.querySelector(".todos");

export {
    sidebar,
    listsDiv,
    addListButton,
    todosDiv,
    listH2,
    editTodo,
    todoTitle,
    todoDescription,
    todoDueDate,
    todoPriorityOptions,
    createLink,
    createTodo,
    listInput,
    actionsDropdown,
}