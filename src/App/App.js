import FormControl from "../components/FormControl";
import TodoList from "../components/TodoList";
import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <FormControl />
      <TodoList />
    </div>
  );
}

export default App;
