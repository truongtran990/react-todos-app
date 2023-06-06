import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todoList }) {
  return (
    <div className="todolist-list">
      <div>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              textContent={todo.content}
              dateContent={todo.date}
              status={todo.status}
            />
          );
        })}
      </div>
    </div>
  );
}
