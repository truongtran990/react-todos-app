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
    date: "Wed Jun 07 2023",
    status: "incomplete",
    id: 0,
  },
  {
    content: "Learn Django",
    date: "Tue Jun 06 2023",
    status: "complete",
    id: 1,
  },
  {
    content: "Learn AWS",
    date: "Fri Jun 02 2023",
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

  const handleAddTodo = (todo) => {
    const newTodo = {
      content: todo.content,
      date: new Date().toDateString(),
      status: todo.status,
      id: todoId++,
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <FormControl
        setIsModalOpen={setIsModalOpen}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {filteredTodo.length > 0 && <TodoList todoList={filteredTodo} />}

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} handleAddTodo={handleAddTodo} />
      )}
    </div>
  );
}

let todoId = 3;
export default App;
