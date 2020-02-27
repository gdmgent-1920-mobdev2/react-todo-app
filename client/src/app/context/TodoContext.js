import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

const mockData = [
    { id: uuidv4(), title: 'Mijn kindjes wassen', completed: true, createdAt: Date.now() },
    { id: uuidv4(), title: 'Vegan food halen uit den Albert', completed: true, createdAt: Date.now() },
    { id: uuidv4(), title: 'Nieuw Macbook Pro 18inch afhalen at coolblue', completed: false, createdAt: Date.now() }
];

const TodoContextProvider = ({children}) => {
    const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem('todoapp.todo')) || []);

    useEffect(() => {
        localStorage.setItem('todoapp.todo', JSON.stringify(todos));
    }, [todos])

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                title,
                completed: false,
                createdAt: Date.now()
            }
        ]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completeTodo = (id, completed) => {
        setTodos([...todos.map((todo) => (todo.id === id) ? {...todo, completed } : todo)]);
    };

    return (
        <TodoContext.Provider value={{todos, addTodo, completeTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoContextProvider,
}