import React from 'react';

const TodoForm = ({}) => {
    return (
        <form className="todo-form">
            <input type="text" required placeholder="write your todo..." />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;