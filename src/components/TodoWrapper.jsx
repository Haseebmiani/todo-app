import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => [...prevTodos, todoText]);
    // clear the input todo text
    setTodoText("");
  };

  const editTask = (index) => {
    const todoList = [...todos];
    const editedTodo = prompt("Edit the todo");
    if (editedTodo !== null) {
      let updatedTodos = [...todoList];
      updatedTodos[index] = editedTodo;
      setTodos(updatedTodos);
    }
  };

  const deleteTask = (todo) => {
    const updatedTodos = todos.filter((item) => {
      return item !== todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 mt-4 h-3/5">
      <h1>✔ Add Today Tasks! 😍</h1>
      <TodoForm
        submitHandler={submitHandler}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      {todos && (
        <TodoList todos={todos} editTask={editTask} deleteTask={deleteTask} />
      )}
    </div>
  );
};

export default TodoWrapper;
