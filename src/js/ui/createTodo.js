import createUIElement from "../utils/createUIElement";

export const createTodo = (todo) => {
    const todoInput = createUIElement("input", {
        type: "checkbox",
        class: "todo-checkbox",
        id: "todoCheckbox",
        name: "todoCheckbox",
    });
    const todoText = createUIElement("span", {
        class: "todo-text",
        textContent: todo.title,
    });
    const todoDeleteButton = createUIElement("button", {
        class: "button icon-button delete-button",
    });
    const todoEditButton = createUIElement("button", {
        class: "button icon-button edit-button",
    });
    const todoActionsDiv = createUIElement("div", {
        class: "todo-actions",
    }, [
        todoDeleteButton,
        todoEditButton,
    ]);
    const todoListItem = createUIElement("li", {
        class: "todo",
        "data-uuid": todo.id,
    },
    [
        todoInput,
        todoText,
        todoActionsDiv,
    ]);
    return todoListItem;
};