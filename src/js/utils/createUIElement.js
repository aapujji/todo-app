const createUIElement = (tag = "div", attributes = {}, children = [], eventListener = {}) => {
    const elem = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        if (key in elem) elem[key] = value;
        else elem.setAttribute(key,value);
    });
    if (eventListener) {
        elem.addEventListener(eventListener.event, eventListener.eventFunction);
    }
    if (children) children.map((childElem) => elem.appendChild(childElem))
    return elem;
}

export default createUIElement;

// const newTodoList = todoList();
// const newTodo = todo("this is my first task");
// newTodoList.addToList(newTodo);
// newTodo.completed = true;
// // newTodoList.removeFromList(newTodo);
// console.log(newTodoList.getList());

// // const addDiv = document.querySelector(".add-todo");
// // addDiv.addEventListener("keypress", (e) => {
// //     if (e.keyCode === 13 && e.key === "Enter" && e.target.textContent) {
// //         e.preventDefault();
// //         const newTodo = todo(e.target.textContent);
// //         createTodoUI(newTodo);
// //         newTodoList.addToList(newTodo);
// //         e.target.textContent = "";
// //     }
// // });