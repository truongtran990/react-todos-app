import { RiCloseLine } from "react-icons/ri";

import styles from "./Modal.module.css";

export default function Modal({ setIsModalOpen }) {
  return (
    <>
      <div
        className={styles.modal_dark_background}
        onClick={() => setIsModalOpen(false)}
      />
      <div className={styles.modal_centered}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <h5 className={styles.modal_heading}>Add TODO</h5>
          </div>
          <button
            className={styles.modal_close_btn}
            onClick={() => setIsModalOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modal_content}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modal_actions}>
            <div className={styles.modal_actions_container}>
              <button
                className={styles.modal_add_btn}
                onClick={() => setIsModalOpen(false)}
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
          <h1>Hello Modal</h1>
        </div>
      </div>
    </>
  );
}
