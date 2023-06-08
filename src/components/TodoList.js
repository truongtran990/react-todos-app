import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({
  todoList,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  return (
    <div className="todolist-list">
      <div>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
}
