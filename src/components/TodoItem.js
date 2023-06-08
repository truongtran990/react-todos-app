import ItemAction from "./ItemAction";
import ItemDetail from "./ItemDetail";
import "./TodoItem.css";

export default function TodoItem({ todo, handleUpdateTodo, handleDeleteTodo }) {
  return (
    <>
      <div className="todoitem-item">
        <ItemDetail
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
        ></ItemDetail>
        <ItemAction
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        ></ItemAction>
      </div>
    </>
  );
}
