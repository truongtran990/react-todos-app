import ItemAction from "./ItemAction";
import ItemDetail from "./ItemDetail";
import "./TodoItem.css";

export default function TodoItem({ textContent, dateContent, status }) {
  return (
    <>
      <div className="todoitem-item">
        <ItemDetail
          textContent={textContent}
          dateContent={dateContent}
          status={status}
        ></ItemDetail>
        <ItemAction></ItemAction>
      </div>
    </>
  );
}
