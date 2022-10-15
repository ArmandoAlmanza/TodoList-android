import React, { useRef, useState, useEffect } from "react";
import { TodoList } from "./Components/TodoList";
import feli from "./assets/feli.jpg";
import { v4 as uuidv4 } from "uuid";

const KEY = "todoApp.todos";

export function App() {
    // creamos una constante (uno sera el estado y el otro para modificarlo)
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea ", completed: false },
    ]);

    const todoTaskRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task === "") return;

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task, completed: false }];
        });

        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <div className="word-waves">
            <span>Welcome to our todo list</span>
            <span>Welcome to our todo list</span>  
                </div> 
            <div className="todo__form">
                <div className="campo">
                    <input
                        ref={todoTaskRef}
                        type="text"
                        className="todo__input"
                        placeholder="Enter a todo"
                    />

                    <button onClick={handleTodoAdd} className="btn btn__add">
                        +
                    </button>
                    <button
                        onClick={handleClearAll}
                        className="btn btn__delete"
                    >
                        Remove{" "}
                    </button>
                </div>
            </div>
            <div className="message">
                <p>
                    Te quedan {todos.filter((todo) => !todo.completed).length}{" "}
                    tareas por terminar
                </p>
            </div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
}
