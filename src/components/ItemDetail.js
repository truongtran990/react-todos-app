import "./ItemDetail.css";

export default function ItemDetail({ todo, handleUpdateTodo }) {
  const isComplete = todo.status === "complete" ? true : false;
  return (
    <div className="itemdetail">
      <input
        type="checkbox"
        name="active"
        checked={isComplete}
        onChange={() => {
          console.log("todo: ", todo);
          const todoToBeUpdate = {
            ...todo,
            status: todo.status === "complete" ? "incomplete" : "complete",
          };
          console.log("changed checkbox: ", todoToBeUpdate);
          handleUpdateTodo(todoToBeUpdate);
        }}
      />
      <div className="itemdetail-content">
        <p
          className={`itemdetail-text ${
            isComplete ? "itemdetail-complete" : ""
          }`}
        >
          {todo.content}
        </p>
        <p className="itemdetail-date">{todo.date}</p>
      </div>
    </div>
  );
}

// 3:00 AM, 01/06/2023
