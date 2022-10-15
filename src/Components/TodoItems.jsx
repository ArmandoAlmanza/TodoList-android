import React from "react";

export function TodoItems({ todo, toggleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li className="todo">
            <label name="todo" className="cont">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleTodoClick}
                />
                <span></span>
            </label>

            <label htmlFor="todo" className="label__todo">{task}</label>
        </li>
    );
}
