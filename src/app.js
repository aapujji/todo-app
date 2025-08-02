import todo from "./js/todo";
import todoList from "./js/todolist";

const newTodolist = todoList("My todo list", []);

const newTodo = todo("this is my first task", false);
newTodo.completed = true;
newTodo.title = "this is still my first task";

newTodolist.addTodo(newTodo);

console.log(newTodolist);