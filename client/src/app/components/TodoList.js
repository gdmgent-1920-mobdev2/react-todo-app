import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../context';

const TodoList = ({}) => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map((todo, index) => {
                        return <TodoListItem todo={todo} key={index} />
                    })
                }                
            </ul>
        </div>
    );
};

export default TodoList;