import Todos from "./components/Todos";
import NewToDo from "./components/NewToDo";
import TodosContextProvider from "./store/todos-context";

function App() {
  
  return (
    <TodosContextProvider>
      <NewToDo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
