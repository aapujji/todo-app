import todoList from "./modules/todolist.js";
import todo from "./modules/todo.js";
import { updateSidebarLinks, updateTodoList } from "./components/events.js";
import { getActiveList, setActiveList } from "./modules/activeList.js";
import '../css/styles.css';

const lists = [];

const initializeApp = () => {
    const defaultList = todoList("Today", []);
    const exampleTodo = todo("This is an example todo", "This is the todo description");
    defaultList.addTodo(exampleTodo);
    lists.push(defaultList);
    setActiveList(lists[0]);

    updateSidebarLinks(lists);
    updateTodoList(getActiveList());
}

export {
    lists,
    initializeApp,
}