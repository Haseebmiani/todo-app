import React from "react";

const TodoList = ({ editTask, deleteTask, todos }) => {
  return (
    <div className="mt-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between items-center rounded bg-cyan-600 text-white p-2 mb-2">
            <p className="text-lg space-x-2">{todo}</p>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(index)}
                className="bg-green-600 text-white rounded py-2 px-4">
                Edit
              </button>
              <button
                onClick={() => deleteTask(todo)}
                className="bg-rose-600 text-white rounded py-2 px-4">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">No task added yet!</p>
      )}
    </div>
  );
};

export default TodoList;
