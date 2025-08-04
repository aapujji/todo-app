import { format } from "date-fns";
import todo from "../modules/todo.js";
import todoList from "../modules/todolist.js";
import { lists } from "../default.js";
import { getActiveList, setActiveList } from "../modules/activeList.js";
import { listsDiv, 
    addListButton, 
    todosDiv, 
    listH2, 
    sidebar, 
    editTodo, 
    editTodoForm,
    todoTitle, 
    todoDescription, 
    todoDueDate, 
    todoPriorityOptions,
    detailViewDiv,
    createLink,
    createTodo,
    listInput,
    createTodoDetailView,
} from "./dom.js";

const getClosestTodo = (elem) => {
    return elem.closest(".todo");
}

const updateSidebarLinks = (lists) => {
    listsDiv.textContent = "";
    lists.map((list) => {
        listsDiv.appendChild(createLink(list));
    });
    addListButton.classList.remove("hide");
}

const updateTodoList = (activeList) => {
    todosDiv.textContent = "";
    listH2.textContent = activeList.title;
    activeList.todos.map((todo) => {
        todosDiv.appendChild(createTodo(todo));
    })
}

const handleAddTodoList = (target) => {
    sidebar.appendChild(listInput());
    target.classList.add("hide");
}

const handleAddTodoListLink = (target) => {
    setActiveList(lists.find((list) => { return list.id === target.dataset.uuid}));
    const activeList = getActiveList();
    updateTodoList(activeList);    
}

const handleCheckTodo = (target) => {
    const activeList = getActiveList();
    const todo = activeList.findTodo(getClosestTodo(target).dataset.uuid);
    todo.completed = !todo.completed;
    const todoSpan = target.nextElementSibling;
    todoSpan.classList.toggle("complete");
}

const handleTodoActionsButton = (target) => {
    getClosestTodo(target).querySelector(".actions-container").classList.toggle("hide");    
}

const handleDeleteTodo = (target) => {
    const activeList = getActiveList();
    const todo = activeList.findTodo(getClosestTodo(target).dataset.uuid);
    activeList.removeTodo(todo);
    updateTodoList(activeList);    
}

const handleEditTodo = (target) => {
    const activeList = getActiveList();
    const todo = activeList.findTodo(getClosestTodo(target).dataset.uuid);
    editTodoForm.dataset.uuid = todo.id;
    todoTitle.value = todo.title;
    todoDescription.value = todo.description;
    if (todo.dueDate) todoDueDate.value = format(new Date(todo.dueDate), "yyyy-MM-dd");
    todoPriorityOptions.forEach((option) => {
        option.selected = option.value === todo.priority;
    });
    editTodo.classList.remove("hide");
}

const handleSaveTodoForm = (target) => {
    const activeList = getActiveList();
    const todo = activeList.findTodo(target.closest(".form").dataset.uuid);
    if (todo.title !== todoTitle.value) todo.title = todoTitle.value;
    if (todo.description !== todoDescription.value) todo.description = todoDescription.value;
    if (todo.dueDate !== todoDueDate.value) todo.dueDate = todoDueDate.value;
    updateTodoList(activeList);
    editTodo.classList.add("hide");
}

const handleNewTodoList = (target) => {
    const newList = todoList(target.value, []);
    lists.push(newList);
    target.remove();
    setActiveList(lists[lists.length-1]);
    const activeList = getActiveList();
    updateSidebarLinks(lists);
    updateTodoList(activeList);
}

const handleNewTodo = (target) => {
    const activeList = getActiveList();
    activeList.todos.push(todo(target.value));
    updateTodoList(activeList);
    target.value = "";
}

const handleViewTodo = (target) => {
    const activeList = getActiveList();
    const todo = activeList.findTodo(getClosestTodo(target).dataset.uuid);
    createTodoDetailView(todo);
    detailViewDiv.classList.toggle("hide");
}

document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".add-list")) {
        handleAddTodoList(target);
    } else if (target.matches(".list-link")) {
        handleAddTodoListLink(target);
    } else if (target.matches(".todo-checkbox")) {
        handleCheckTodo(target);
    } else if (target.matches(".actions-button")) {
        handleTodoActionsButton(target);
    } else if (target.matches(".delete")) {
        handleDeleteTodo(target);
    } else if (target.matches(".edit")) {
        handleEditTodo(target);
    } else if (target.matches(".save-todo")) {
        handleSaveTodoForm(target);
    } else if (target.matches(".todo-text, .todo-title, .todo-desc")) {
            handleViewTodo(target);
    }
});

document.addEventListener("keypress", (e) => {
    const target = e.target;
    if (e.key === "Enter") {
        e.preventDefault();
        if (target.matches(".new-list-input") && target.value) {
            handleNewTodoList(target);
        } else if (target.matches(".todo-input")) {
            handleNewTodo(target);
        }
    }
});

export {
    updateSidebarLinks,
    updateTodoList,
}