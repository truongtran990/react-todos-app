import { useState } from "react";

import { RiCloseLine } from "react-icons/ri";

import styles from "./Modal.module.css";

export default function Modal({
  setIsModalOpen,
  headerText,
  handleAddTodo,
  todo,
  handleUpdateTodo,
  isAddTodo,
}) {
  const initialInput = isAddTodo
    ? {
        inputTitle: "",
        inputStatus: "incomplete",
      }
    : {
        inputTitle: todo.content,
        inputStatus: todo.status,
      };
  const [inputData, setInputData] = useState(initialInput);

  const handleInputChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        className={styles.modal_dark_background}
        onClick={() => setIsModalOpen(false)}
      />
      <div className={styles.modal_centered}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <h5 className={styles.modal_heading}>{headerText}</h5>
          </div>
          <button
            className={styles.modal_close_btn}
            onClick={() => setIsModalOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modal_content}>
            <div className={styles.modal_content_item}>
              <p>Title</p>
              <input
                type="text"
                name="inputTitle"
                id="inputTitle"
                onChange={handleInputChange}
                value={inputData.inputTitle}
              />
            </div>
            <div className={styles.modal_content_item}>
              <p>Status</p>
              <select
                name="inputStatus"
                id="inputStatus"
                value={inputData.inputStatus}
                onChange={handleInputChange}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>
          <div className={styles.modal_actions}>
            <div className={styles.modal_actions_container}>
              <button
                className={styles.modal_add_btn}
                onClick={(event) => {
                  if (!inputData.inputTitle.trim()) return;

                  if (isAddTodo) {
                    const todo = {
                      content: inputData.inputTitle,
                      status: inputData.inputStatus,
                    };
                    handleAddTodo(todo);
                  } else {
                    const todoToBeUpdate = {
                      ...todo,
                      content: inputData.inputTitle,
                      status: inputData.inputStatus,
                    };
                    handleUpdateTodo(todoToBeUpdate);
                  }
                  setTimeout(() => {
                    setIsModalOpen(false);
                  }, 500);
                }}
              >
                {isAddTodo ? "Add Task" : "Update Task"}
              </button>
              <button
                className={styles.modal_cancel_btn}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
