import createUIElement from "../utils/createUIElement";

export const createListLink = (lists) => {
    const listsUl = document.querySelector(".lists");
    lists.map((list) => {
        const listButton = createUIElement("button", {class: "list-link", textContent: list.title });
        const listLi = createUIElement("li", {class: "list-item"}, [listButton]);
        listsUl.appendChild(listLi);
        
        createTodoListUI(list.todos);
    });
}

const createTodoListUI = (list) => {
    const todoList = document.querySelector(".todos");
    list.map((todo) => {
        const todoInput = createUIElement("input", {
            type: "checkbox",
            class: "todo-checkbox",
            id: "todoCheckbox",
            name: "todoCheckbox",
        },
        [],
        {
            event: "click",
            eventFunction: (e) => {
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
        },
        [
            todoInput,
            todoText,
        ]);
        todoList.appendChild(todoListItem);
    })
}