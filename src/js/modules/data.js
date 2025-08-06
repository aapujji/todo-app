import todo from "./todo";

export const setData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getData = () => {
    const projectsData = JSON.parse(localStorage.getItem("projects"));
    const todosData = JSON.parse(localStorage.getItem("todos"));

    const todos = [];

    const projects = projectsData ? projectsData : ["default"];

    if (todosData) {
        todosData.map((item) => {
            todos.push(item);
        });
    } else {
        const sampleTodo = todo("This is a sample todo", "default", "with a sample description", false, new Date(), 2);
        const sampleTodo2 = todo("This is another sample todo", "default", "with a sample description", true, new Date("2025-06-12"), 3);
        todos.push(sampleTodo);
        todos.push(sampleTodo2);
        setData("projects", projects);
        setData("todos", todos);
    }

    return {
        projects,
        todos,
    }
}

export const createProject = (project) => { 
    const data = getData();
    const projects = data.projects;
    projects.push(project);
    setData("projects", projects);
    return projects;
};

export const deleteProject = (project) => { 
    const data = getData();
    const projects = data.projects;
    const todos = data.todos;
    const projectName = project.split("-").join(" ");
    projects.map((proj, index) => {
        if (proj === projectName) {
            projects.splice(index, 1);
        }
    });
    todos.map((todo) => {
        if (todo.project === project) {
            deleteTodo(todo.id);
        }
    });
    setData("projects", projects);
    return projects;
};

export const createTodo = (title, project) => {
    const data = getData();
    const todos = data.todos;
    const newTodo = todo(title, project);
    todos.push(newTodo);
    setData("todos", todos);
};

export const deleteTodo = (uuid) => {
    const data = getData();
    const todos = data.todos;
    todos.map((todo, index) => {
        if (todo.id === uuid)
            todos.splice(index, 1);
    })
    setData("todos",todos);
};

export const getProjectTodos = (project) => {
    const data = getData();
    return data.todos.filter(todo => todo.project === project);
}

export const findTodo = (uuid) => {
    const data = getData();
    const todos = data.todos;
    const todo = todos.find(item => item.id === uuid);
    return todo;
}

export const toggleComplete = (uuid) => {
    const todos = getData().todos;
    todos.map((todo) => {
        if (todo.id === uuid) {
            todo.completed = !todo.completed;
        }
    })
    setData("todos", todos);
}

// export const updateTodo = (uuid, newTodo) => {
//     const data = getData();
//     const todos = data.todos;
//     const todo = todos.find(item => item.id === uuid);
//     ({
//         title,
//         description,
//         completed,
//         dueDate,
//         priority,
//         project
//     } = newTodo);

//     if (title) todo.title = title;
//     if (description) todo.description = description;
//     if (completed && completed !== todo.completed) todo.completed = !todo.completed;
//     if () 

//     return todo;
// }