"use client";

import todoState from "@/store/todoState";
import React from "react";

function DisplayTodos() {
  const { todos, deleteTodo, toggleTodo } = todoState((state) => {
    return {
      todos: state.todos,
      deleteTodo: state.deleteTodo,
      toggleTodo: state.toggleTodo,
    };
  });
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li
            className={`bg-[#94A3B8] text-white flex justify-between px-2 py-2 mb-2 ${
              todo.completed ? "line-through" : ""
            } cursor-pointer`}
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayTodos;
