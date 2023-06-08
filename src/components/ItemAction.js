import { useState } from "react";

import "./ItemAction.css";
import Modal from "./Modal";

export default function ItemAction({ setIsModalOpen, todo, handleUpdateTodo }) {
  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
  return (
    <div className="itemaction-actions">
      <button className="btn itemaction-btn">Delete</button>
      <button
        className="btn itemaction-btn"
        onClick={() => {
          setIsShowUpdateModal(true);
        }}
      >
        Edit
      </button>
      {isShowUpdateModal && (
        <Modal
          setIsModalOpen={setIsShowUpdateModal}
          headerText="Update Todo"
          isAddTodo={false}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
        />
      )}
    </div>
  );
}
