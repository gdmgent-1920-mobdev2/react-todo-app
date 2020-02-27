import React, { createContext, useEffect, useState } from 'react';

const TodoContext = createContext();

const mockData = [
    { title: 'Mijn kindjes wassen', completed: false, createdAt: Date.now() },
    { title: 'Vegan food halen uit den Albert', completed: true, createdAt: Date.now() },
    { title: 'Nieuw Macbook Pro 18inch afhalen at coolblue', completed: false, createdAt: Date.now() }
];

const TodoContextProvider = ({children}) => {
    const [ todos, setTodos ] = useState(mockData);

    const addTodo = (title) => {
        setTodos([
            ...todos,
            {
                title: title,
                completed: false,
                createdAt: Date.now()
            }
        ]);
    };

    return (
        <TodoContext.Provider value={{todos, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoContextProvider,
}