import createUIElement from "../utils/createUIElement";
import { actionsDropdown } from "./actionsDropdownUI";

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
    // let todoPriorityClasses = "todo-priority";
    // todoPriorityClasses += ` ${(todo.priority)}`;
    // const todoPriority = createUIElement("p", {
    //     class: todoPriorityClasses,
    //     textContent: todo.priority,
    // });
    const todoTextDiv = createUIElement("div", {
        class: "todo-text",
    }, [
        todoTitle,
        todoDescription,
        // todoPriority,
    ]);

    const todoActionsButton = createUIElement("button", {
        class: "button icon-button actions-button",
    });
    const todoActionsDiv = createUIElement("div", {
        class: "todo-actions",
    }, [
        todoActionsButton,
    ]);

    const actions = actionsDropdown();

    const todoListItem = createUIElement("li", {
        class: "todo",
        "data-uuid": todo.id,
    },
    [
        todoInput,
        todoTextDiv,
        todoActionsDiv,
        actions,
    ]);
    return todoListItem;
};