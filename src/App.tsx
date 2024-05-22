import Todos from "./components/Todos";
import Todo from './models/todo';
import NewToDo from "./components/NewToDo";

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ]

  const addToDoHandler = (todoText: string) => {

  };

  return (
    <div>
      <NewToDo onAddTodo={addToDoHandler}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
