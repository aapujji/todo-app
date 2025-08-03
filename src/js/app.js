import todo from "./todo";
import todoList from "./todolist";
import { updateSidebarLinks, updateTodoList } from "./ui/createUI";
import { listInput } from "./ui/createListInput";
import '../css/styles.css';

const lists = [];
const defaultList = todoList("Today", []);
const exampleTodo = todo("This is an example todo", "This is the todo description");
defaultList.addTodo(exampleTodo);
lists.push(defaultList);
let activeList = lists[0];

updateSidebarLinks(lists);
updateTodoList(activeList);

const sidebar = document.querySelector(".sidebar");

const findTodo = (uuid) => {
    const todo = activeList.todos.find((item) => item.id === uuid);
    return todo;
}

document.addEventListener("click", (e) => {
    const classList = e.target.classList;
    if (classList.contains("add-list")) {
        sidebar.appendChild(listInput());
        e.target.classList.add("hide");
    } else if (classList.contains("list-link")) {
        activeList = lists.find((list) => { return list.id === e.target.dataset.uuid});
        updateTodoList(activeList);
    } else if (classList.contains("todo-checkbox")) {
        const todo = findTodo(e.target.closest(".todo").dataset.uuid);
        todo.completed = !todo.completed;
        const todoSpan = e.target.nextElementSibling;
        todoSpan.classList.toggle("complete");
    } else if (classList.contains("edit-button")) {
        console.log(e.target);
    } else if (classList.contains("delete-button")) {
        const todo = findTodo(e.target.closest(".todo").dataset.uuid);
        activeList.removeTodo(todo);
        updateTodoList(activeList);
    }
});

document.addEventListener("keypress", (e) => {
    const target = e.target;
    if (e.key === "Enter") {
        e.preventDefault();
        if (target.classList.contains("new-list-input") && target.value) {
            const newList = todoList(e.target.value, []);
            lists.push(newList);
            e.target.remove();
            activeList = lists[lists.length-1];
            updateSidebarLinks(lists);
            updateTodoList(activeList);
        } else if (target.classList.contains("todo-input")) {
            activeList.todos.push(todo(e.target.value));
            updateTodoList(activeList);
            e.target.value = "";
        }
    }
});