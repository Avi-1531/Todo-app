import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [{ id: 1, todo: "learn java", completed: false }],
  addtodo: (todo) => {},
  updatetodo: (id, todo) => {},
  deletetodo: (id) => {},
  togglecomplete: (id) => {},
});

export const TodoProvider = Todocontext.Provider;

export default function useTodo() {
  return useContext(Todocontext);
}
