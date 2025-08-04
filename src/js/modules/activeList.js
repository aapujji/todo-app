import todoList from "./todolist";

let activeList = null;

const getActiveList = () => {
    return activeList;
}

const setActiveList = (newList) => {
    activeList = newList;
}

export {
    getActiveList,
    setActiveList,
}