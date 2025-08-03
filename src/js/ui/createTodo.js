import createUIElement from "../utils/createUIElement";

const priorities = ["low", "medium", "high"];

export const createTodo = (todo) => {
    const todoInput = createUIElement("input", {
        type: "checkbox",
        class: "todo-checkbox",
        id: "todoCheckbox",
        name: "todoCheckbox",
    });

    const todoTitle = createUIElement("h4", {
        class: "todo-title",
        textContent: todo.title,
    });
    const todoDescription = createUIElement("p", {
        class: "todo-desc",
        textContent: todo.description,
    });
    let todoPriorityClasses = "todo-priority";
    todoPriorityClasses += ` ${(priorities[todo.priority])}`;
    const todoPriority = createUIElement("p", {
        class: todoPriorityClasses,
        textContent: priorities[todo.priority],
    });
    const todoTextDiv = createUIElement("div", {
        class: "todo-text",
    }, [
        todoTitle,
        todoDescription,
        todoPriority,
    ]);

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
        todoTextDiv,
        todoActionsDiv,
    ]);
    return todoListItem;
};