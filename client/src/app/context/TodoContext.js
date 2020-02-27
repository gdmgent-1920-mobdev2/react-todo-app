import React, { createContext, useEffect, useState } from 'react';

const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [ todos, setTodos ] = useState(['Vegan food halen uit den Aldi', 
    'Vegan food halen uit den Aldi']);

    return (
        <TodoContext.Provider value={{todos}}>
            {children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoContextProvider,
}