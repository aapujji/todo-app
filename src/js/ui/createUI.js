import { createLink } from "./createLink";
import { createTodo } from "./createTodo";

const listsDiv = document.querySelector(".lists");
const addListButton = document.querySelector(".add-list");
const todosDiv = document.querySelector(".todos");

export const updateSidebarLinks = (lists) => {
    listsDiv.textContent = "";
    lists.map((list) => {
        listsDiv.appendChild(createLink(list));
    });
    addListButton.classList.remove("hide");
}

export const updateTodoList = (activeList) => {
    todosDiv.textContent = "";
    activeList.todos.map((todo) => {
        todosDiv.appendChild(createTodo(todo));
    })
}