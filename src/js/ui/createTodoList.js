import createUIElement from "../utils/createUIElement";

export const createTodo = (todo) => {
    const todoInput = createUIElement("input", {
        type: "checkbox",
        class: "todo-checkbox",
        id: "todoCheckbox",
        name: "todoCheckbox",
    },
    [],
    {
        event: "click",
        eventFunction: () => {
            todo.completed = !todo.completed;
            console.log(todo);
        },
    });
    const todoText = createUIElement("span", {
        class: "todo-text",
        textContent: todo.title,
    });
    const todoListItem = createUIElement("li", {
        class: "todo",
        "data-uuid": todo.id,
    },
    [
        todoInput,
        todoText,
    ]);
    return todoListItem;
};