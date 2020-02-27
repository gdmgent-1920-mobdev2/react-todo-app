import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({}) => {
    return (
        <div className="todo-list">
            <ul>
                <TodoListItem />
            </ul>
        </div>
    );
};

export default TodoList;