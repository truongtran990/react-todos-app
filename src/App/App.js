import { useState } from "react";

import FormControl from "../components/FormControl";
import TodoList from "../components/TodoList";
import logo from "../logo.svg";
import "./App.css";
import styles from "./App1.module.css";
import Modal from "../components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <FormControl setIsModalOpen={setIsModalOpen} />
      <TodoList />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
