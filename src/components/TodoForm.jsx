import React from "react";

const TodoForm = (props) => {
  const { submitHandler, todoText, setTodoText } = props;

  return (
    <form onSubmit={submitHandler} className="flex items-center justify-center">
      <input
        type="text"
        placeholder="write some todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="grow p-2 mr-2 text-lg rounded bg-slate-100 outline-blue-600 border-none"
      />
      <button
        type="submit"
        className="bg-blue-700 
         text-white py-2 px-5 
         rounded-md outline-none
          border-none hover:bg-blue-600 transition-all ease-out">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
