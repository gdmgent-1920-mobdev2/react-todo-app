import React from 'react';

const TodoListItem = ({todo}) => {
    return (
        <li className="todo-list__item">
            <h1>{todo.title}</h1>
            <span className="btn-complete">C</span>
            <span className="btn-remove">R</span>
        </li>
    );
};

export default TodoListItem;