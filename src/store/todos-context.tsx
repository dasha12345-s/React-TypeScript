import React from "react";
import Todo from '../models/todo'
import { useState } from "react";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addToDoHandler,
        removeTodo: removeTodo
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
        </TodosContext.Provider>
}

export default TodosContextProvider;