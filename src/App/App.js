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
    id: 0,
  },
  {
    content: "Learn Django",
    date: new Date().toDateString(),
    status: "complete",
    id: 1,
  },
  {
    content: "Learn AWS",
    date: new Date().toDateString(),
    status: "complete",
    id: 2,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTodo =
    filterStatus !== "all"
      ? todoList.filter((todo) => {
          return todo.status === filterStatus;
        })
      : todoList;

  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <FormControl
        setIsModalOpen={setIsModalOpen}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {filteredTodo.length > 0 && <TodoList todoList={filteredTodo} />}

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
