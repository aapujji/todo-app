import createUIElement from "../utils/createUIElement";
import Button from "../utils/Button";
import Checkbox from "../utils/Checkbox";
import deleteIcon from "../../images/xmark.svg";

export const TodoListItem = (todo) => {
    const todoCheckbox = Checkbox("todo-checkbox",{checked: todo.completed});
    
    const todoTitle = createUIElement("h4", {
        class: "todo-title",
        textContent: todo.title,
    });
    const todoDescription = createUIElement("p", {
        class: "todo-desc",
        textContent: todo.description,
    });

    const todoTextDiv = createUIElement("div", {
        class: "todo-text",
    }, [
        todoTitle,
        todoDescription,
    ]);

    const deleteImg = createUIElement("img",{
        class: "icon delete-todo",
        src: deleteIcon,
        alt: "delete project",
    });
    const deleteTodoButton = Button("button", "", "delete-todo", {}, [deleteImg]);
    const todoActionsDiv = createUIElement("div", {
        class: "todo-actions",
    }, [
        deleteTodoButton,
    ]);

    const todoListItem = createUIElement("li", {
        class: "todo",
        "data-uuid": todo.id,
    },
    [
        todoCheckbox,
        todoTextDiv,
        todoActionsDiv,
    ]);
    return todoListItem;
};