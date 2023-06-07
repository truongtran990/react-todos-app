import { useState } from "react";

import { RiCloseLine } from "react-icons/ri";

import styles from "./Modal.module.css";

export default function Modal({ setIsModalOpen, headerText, handleAddTodo }) {
  const [inputData, setInputData] = useState({
    inputTitle: "",
    inputStatus: "incomplete",
  });

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
            <h5 className={styles.modal_heading}>{headerText || "Add TODO"}</h5>
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
              />
            </div>
            <div className={styles.modal_content_item}>
              <p>Status</p>
              <select
                name="inputStatus"
                id="inputStatus"
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

                  const todo = {
                    content: inputData.inputTitle,
                    status: inputData.inputStatus,
                  };
                  handleAddTodo(todo);
                  setTimeout(() => {
                    setIsModalOpen(false);
                  }, 1000);
                }}
              >
                Add Task
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
