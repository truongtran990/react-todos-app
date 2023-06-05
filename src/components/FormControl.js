import "./FormControl.css";

export default function FormControl({ setIsModalOpen }) {
  return (
    <div className="formcontrol-add-filter">
      <button
        className="btn formcontrol-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </button>
      <select
        className="btn formcontrol-filter"
        name="filter-task"
        id="filter-task"
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>
    </div>
  );
}
