import { useState } from "react";

import FormControl from "../components/FormControl";
import TodoList from "../components/TodoList";
import logo from "../logo.svg";
import "./App.css";
import styles from "./App1.module.css";
import Modal from "../components/Modal";

const initialTodoList = [
  {
    content: "Learn ReactJS",
    date: new Date().toDateString(),
    status: "incomplete",
  },
  {
    content: "Learn Django",
    date: new Date().toDateString(),
    status: "complete",
  },
  {
    content: "Learn AWS",
    date: new Date().toDateString(),
    status: "complete",
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState(initialTodoList);

  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <FormControl setIsModalOpen={setIsModalOpen} />
      {todoList.length > 0 && <TodoList todoList={todoList} />}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
