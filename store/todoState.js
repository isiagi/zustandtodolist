import { create } from "zustand";

const todoState = create((set) => ({
  todos: [],

  //   Add todo
  addTodo: (text) =>
    set((state) => ({
      // we are first all of the current state and add a new object
      todos: [...state.todos, { id: Date.now(), text: text, completed: false }],
    })),

  // remove todo
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // toggle todo
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        //   removing the {} solves the toggle problem
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));

export default todoState;
