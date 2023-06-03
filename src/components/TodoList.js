import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="todolist-list">
      <ul>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </ul>
    </div>
  );
}
