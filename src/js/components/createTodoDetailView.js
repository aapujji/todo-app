import createUIElement from "../utils/createUIElement";
import { detailViewDiv } from "./dom";

export const createTodoDetailView = (todo) => {
    const todoTitle = createUIElement("h3", {
        class: "detail-todo-title",
        textContent: todo.title,
    });

    const todoDescription = createUIElement("p", {
        class: "detail-todo-desc",
        textContent: todo.description,
    });

    let todoPriorityClasses = "todo-priority";
    todoPriorityClasses += ` ${(todo.priority)}`;
    const todoPriority = createUIElement("p", {
        class: todoPriorityClasses,
        textContent: todo.priority,
    });

    const todoDueDate = createUIElement("p", {
        textContent: todo.dueDate,
    });

    const todoCompleted = createUIElement("p", {
        textContent: todo.completed,
    });

    const detailView = createUIElement("div", {
        class: "detail-view",
    }, [
        todoTitle,
        todoDescription,
        todoCompleted,
        todoDueDate,
        todoPriority,
    ]);

    detailViewDiv.appendChild(detailView);
};