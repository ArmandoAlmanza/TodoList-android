import React from "react";

export function TodoItems({ todo, toggleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li className="todo">
            <input
                type="checkbox"
                checked={completed}
                onChange={handleTodoClick}
                name="todo"
            />
            <label htmlFor="todo">{task}</label>
        </li>
    );
}
