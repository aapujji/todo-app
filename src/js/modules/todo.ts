import { format } from 'date-fns';

type Todo = {
    id: string;
    title: string;
    project: string;
    description: string;
    completed: boolean;
    dueDate?: string;
    priority: number;
};

const todo = (
    title: string,
    project: string = 'default',
    description: string = '',
    completed: boolean = false,
    dueDate?: Date,
    priority: number = 3,
): Todo => {
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        project,
        description,
        completed,
        dueDate: dueDate
            ? format(dueDate, 'MM/dd/yyyy')
            : format(new Date(), 'MM/dd/yyyy'),
        priority,
    };
    newTodo.title = title;
    newTodo.description = description;
    newTodo.completed = completed;
    newTodo.priority = priority;
    newTodo.project = project;

    return newTodo;
};

export { todo, Todo };
