import React, { useContext } from 'react';
import { TodoContext } from '../context';

import './TodoListItem.css';

const TodoListItem = ({todo}) => {
    const { removeTodo } = useContext(TodoContext);

    return (
        <li className="todo-list__item">
            <h1>{todo.title}</h1>
            <span className="btn-complete">C</span>
            <span className="btn-remove" onClick={ev => removeTodo(todo.id)}>R</span>
        </li>
    );
};

export default TodoListItem;