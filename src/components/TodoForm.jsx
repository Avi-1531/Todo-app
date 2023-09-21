import { useState } from "react";
import useTodo from "../context/Todocontext";

function TodoForm() {
  const [todo, settodo] = useState("");
  const { addtodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addtodo({ todo: todo, completed: false });
    settodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
