import React, { createContext, useEffect, useState } from 'react';
import uuid from 'uuid/v1';

const TodoContext = createContext();

const mockData = [
    { id: uuid(), title: 'Mijn kindjes wassen', completed: false, createdAt: Date.now() },
    { id: uuid(), title: 'Vegan food halen uit den Albert', completed: true, createdAt: Date.now() },
    { id: uuid(), title: 'Nieuw Macbook Pro 18inch afhalen at coolblue', completed: false, createdAt: Date.now() }
];

const TodoContextProvider = ({children}) => {
    const [ todos, setTodos ] = useState(mockData);

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                id: uuid(),
                title: title,
                completed: false,
                createdAt: Date.now()
            }
        ]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoContextProvider,
}