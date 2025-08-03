import todo from "./todo";
import todoList from "./todolist";
import { createListLink, createTodoListUI } from "./ui/createUI";
import '../css/styles.css';

const allLists = [];
const defaultList = todoList("default", []);
allLists.push(defaultList);
const firstTodo = todo("first task");
defaultList.addTodo(firstTodo);
console.log(allLists);
createListLink(allLists);