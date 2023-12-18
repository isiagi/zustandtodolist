import AddTodo from "@/components/AddTodo";
import DisplayTodos from "@/components/DisplayTodos";
import React from "react";

function TodoList() {
  // todo list page
  return (
    <div className="flex bg-gray-900 items-center h-screen flex-col">
      <h1 className="text-3xl text-white py-10">TodoList</h1>
      <div>
        <AddTodo />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default TodoList;

// lets create the todo state. global state
// we are going to create two comonents, one for adding todo and other for displaying todos
