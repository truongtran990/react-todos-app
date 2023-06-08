import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import FormControl from "../components/FormControl";
import TodoList from "../components/TodoList";
import "./App.css";
import Modal from "../components/Modal";

const initialTodoList = JSON.parse(localStorage.getItem("todoList")) || [];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState(initialTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const localStorageTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (localStorageTodoList) {
      setTodoList(localStorageTodoList);
    }
  }, []);

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
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodo]);
  };

  const handleUpdateTodo = (todo) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          ...todo,
        };
      } else {
        return item;
      }
    });

    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (todoId) => {
    setTodoList(todoList.filter((item) => item.id !== todoId));
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <FormControl
        setIsModalOpen={setIsModalOpen}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {filteredTodo.length > 0 && (
        <TodoList
          todoList={filteredTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      )}

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          handleAddTodo={handleAddTodo}
          headerText="Add Todo"
          isAddTodo={true}
        />
      )}
    </div>
  );
}

let todoId = 3;
export default App;
