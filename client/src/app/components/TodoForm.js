import React, { useState } from 'react';

const TodoForm = ({}) => {
    const [ title, setTitle ] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" required placeholder="write your todo..." onChange={(ev) => setTitle(ev.target.value)} value={title} />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;