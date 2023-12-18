"use client";

import todoState from "@/store/todoState";
import React, { useState } from "react";

function AddTodo() {
  const [text, setText] = useState("");

  const addTodo = todoState((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    //  To clear input after submission
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-3">
        {/* grab value from input and in text local state */}
        <input
          className="py-2 outline-none"
          type="text"
          placeholder="Add Todo..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="bg-gray-500 px-2 text-white" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

// let use the add here
