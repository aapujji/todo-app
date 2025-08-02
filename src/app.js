import todo from "./js/todo";

const newTodo = todo("this is my first task", false);
newTodo.completed = true;
newTodo.title = "this is still my first task";
console.log(newTodo);