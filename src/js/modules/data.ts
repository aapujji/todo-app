import { todo } from './todo';

export type PriorityOption = {
    id: number;
    name: string;
};

export const priorityOptions: PriorityOption[] = [
    {
        id: 1,
        name: 'Priority 1',
    },
    {
        id: 2,
        name: 'Priority 2',
    },
    {
        id: 3,
        name: 'Priority 3',
    },
];

export const setData = (key: string, data: Object) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getData = () => {
    const storedProjects = localStorage.getItem('projects');
    const storedTodos = localStorage.getItem('todos');
    const projectsData = storedProjects ? JSON.parse(storedProjects) : [];
    const todosData = storedTodos ? JSON.parse(storedTodos) : [];

    const todos = [];

    const projects = projectsData ? projectsData : ['default'];

    if (todosData) {
        todosData.map((item: Object) => {
            todos.push(item);
        });
    } else {
        const sampleTodo = todo(
            'This is a sample todo',
            'default',
            'with a sample description',
            false,
            new Date(),
            2,
        );
        const sampleTodo2 = todo(
            'This is another sample todo',
            'default',
            'with a sample description',
            true,
            new Date('2025-06-12'),
            3,
        );
        todos.push(sampleTodo);
        todos.push(sampleTodo2);
        setData('projects', projects);
        setData('todos', todos);
    }

    return {
        projects,
        todos,
    };
};

export const createProject = (project: string) => {
    const data = getData();
    const projects = data.projects;
    projects.push(project);
    setData('projects', projects);
    return projects;
};

export const deleteProject = (project: string) => {
    const data = getData();
    const projects = data.projects;
    const todos = data.todos;
    const projectName = project.split('-').join(' ');
    projects.map((proj: string, index: number) => {
        if (proj === projectName) {
            projects.splice(index, 1);
        }
    });
    todos.map((todo) => {
        if (todo.project === project) {
            deleteTodo(todo.id);
        }
    });
    setData('projects', projects);
    return projects;
};

export const createTodo = (title: string, project: string) => {
    const data = getData();
    const todos = data.todos;
    const newTodo = todo(title, project);
    todos.push(newTodo);
    setData('todos', todos);
};

export const deleteTodo = (uuid: string) => {
    const data = getData();
    const todos = data.todos;
    todos.map((todo, index) => {
        if (todo.id === uuid) todos.splice(index, 1);
    });
    setData('todos', todos);
};

export const getProjectTodos = (project: string) => {
    const data = getData();
    return data.todos.filter((todo) => todo.project === project);
};

export const findTodo = (uuid: string) => {
    const data = getData();
    const todos = data.todos;
    const todo = todos.find((item) => item.id === uuid);
    return todo;
};

export const toggleComplete = (uuid: string) => {
    const todos = getData().todos;
    todos.map((todo) => {
        if (todo.id === uuid) {
            todo.completed = !todo.completed;
        }
    });
    setData('todos', todos);
};

export const updateTodo = (uuid: string, updates: Object) => {
    const data = getData() as any;
    const todos = data.todos;
    const todo = todos.find((item: any) => item.id === uuid);
    Object.assign(todo, updates);
    setData('todos', todos);
};
