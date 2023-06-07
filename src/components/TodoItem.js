import ItemAction from "./ItemAction";
import ItemDetail from "./ItemDetail";
import "./TodoItem.css";

export default function TodoItem({ todo, handleUpdateTodo, setIsModalOpen }) {
  return (
    <>
      <div className="todoitem-item">
        <ItemDetail
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
        ></ItemDetail>
        <ItemAction setIsModalOpen={setIsModalOpen}></ItemAction>
      </div>
    </>
  );
}
