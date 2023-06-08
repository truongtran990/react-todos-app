import "./FormControl.css";

export default function FormControl({
  setIsModalOpen,
  filterStatus,
  setFilterStatus,
}) {
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
        name="filterTask"
        id="filterTask"
        onChange={(event) => {
          setFilterStatus(event.target.value);
        }}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}
