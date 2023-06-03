import "./FormControl.css";

export default function FormControl() {
  return (
    <div className="formcontrol-add-filter">
      <button className="formcontrol-btn">Add Task</button>
      <select
        className="formcontrol-filter"
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
