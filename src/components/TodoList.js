import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="todolist-list">
      <div>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </div>
  );
}
