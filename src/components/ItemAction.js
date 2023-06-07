import "./ItemAction.css";

export default function ItemAction({ setIsModalOpen }) {
  return (
    <div className="itemaction-actions">
      <button className="btn itemaction-btn">Delete</button>
      <button
        className="btn itemaction-btn"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Edit
      </button>
    </div>
  );
}
