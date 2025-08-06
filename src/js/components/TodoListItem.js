import createUIElement from "../utils/createUIElement";
import Button from "../utils/Button";
import Checkbox from "../utils/Checkbox";
import deleteIcon from "../../images/delete.svg";
import editIcon from "../../images/edit.svg";

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
        class: "icon delete-button",
        src: deleteIcon,
        alt: "delete",
    });
    const editImg = createUIElement("img",{
        class: "icon edit-button",
        src: editIcon,
        alt: "edit",
    });
    const deleteTodoButton = Button("button", "", "delete-button", {}, [deleteImg]);
    const editTodoButton = Button("button", "", "edit-button", {}, [editImg]);
    const todoActionsDiv = createUIElement("div", {
        class: "todo-actions",
    }, [
        editTodoButton,
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