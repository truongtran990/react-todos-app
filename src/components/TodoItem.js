import ItemAction from "./ItemAction";
import ItemDetail from "./ItemDetail";
import "./TodoItem.css";

export default function TodoItem() {
  return (
    <>
      <div className="todoitem-item">
        <ItemDetail></ItemDetail>
        <ItemAction></ItemAction>
      </div>
    </>
  );
}
