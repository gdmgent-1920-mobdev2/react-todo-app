import React from 'react';

const TodoListItem = ({todo}) => {
    return (
        <li className="todo-list__item">
            {todo}
        </li>
    );
};

export default TodoListItem;