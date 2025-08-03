import todo from "./todo";
import todoList from "./todolist";
import { createLink } from "./ui/createLink";
import { createTodo } from "./ui/createTodoList";
import { listInput } from "./ui/createUI";
import { createEditableDiv } from "./ui/createEditableDiv";
import '../css/styles.css';

const lists = [];
const defaultList = todoList("Today", []);
const exampleTodo = todo("This is an example todo");
defaultList.addTodo(exampleTodo);
lists.push(defaultList);
let activeList = lists[0];

const mainContent = document.querySelector(".main-content");
const sidebar = document.querySelector(".sidebar");
const listsDiv = document.querySelector(".lists");
const addListButton = document.querySelector(".add-list");
const todosDiv = document.querySelector(".todos");
const updateSidebarLinks = () => {
    listsDiv.textContent = "";
    lists.map((list) => {
        listsDiv.appendChild(createLink(list));
    });
    addListButton.classList.remove("hide");
}

const updateTodoList = () => {
    todosDiv.textContent = "";
    activeList.todos.map((todo) => {
        todosDiv.appendChild(createTodo(todo));
    })
    mainContent.appendChild(createEditableDiv());
}

updateSidebarLinks();
updateTodoList();

document.addEventListener("click", (e) => {
    const classList = e.target.classList;
    if (classList.contains("add-list")) {
        sidebar.appendChild(listInput());
        e.target.classList.add("hide");
    } else if (classList.contains("list-link")) {
        activeList = lists.find((list) => { return list.id === e.target.dataset.uuid});
        updateTodoList();
    }
});

document.addEventListener("keypress", (e) => {
    const target = e.target;
    if (e.key === "Enter") {
        console.log('test');
        e.preventDefault();
        if (target.classList.contains("new-list-input") && target.value) {
            const newList = todoList(e.target.value, []);
            lists.push(newList);
            e.target.remove();
            activeList = lists[lists.length-1];
            updateSidebarLinks();
            updateTodoList();
        } else if (target.classList.contains("todo-input")) {
            activeList.todos.push(todo(e.target.textContent));
            updateTodoList();
        }
    }
});