import React, { createContext, useEffect, useState } from 'react';

const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [ todos, setTodos ] = useState();

    return (
        <TodoContext.Provider>
            {children}
        </TodoContext.Provider>
    )
};

export {
    TodoContext,
    TodoContextProvider,
}