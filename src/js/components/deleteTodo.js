import { getData, setData } from "../modules/data";

export const deleteTodo = (uuid) => {
    const data = getData();
    const todos = data.todos;
    todos.map((todo, index) => {
        if (todo.id === uuid)
            todos.splice(index, 1);
    })
    setData("todos",todos);
};