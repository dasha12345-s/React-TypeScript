import { useState } from "react";

import Todos from "./components/Todos";
import Todo from './models/todo';
import NewToDo from "./components/NewToDo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    });
  };

  return (
    <div>
      <NewToDo onAddTodo={addToDoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
