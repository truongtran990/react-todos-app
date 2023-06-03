import "./ItemDetail.css";

export default function ItemDetail({ isActive }) {
  return (
    <div className="itemdetail">
      <input type="checkbox" name="active" checked={!isActive || false} />
      <div className="itemdetail-content">
        <p className="itemdetail-text">Learn ReactJS</p>
        <p className="itemdetail-date">3:00 AM, 01/06/2023</p>
      </div>
    </div>
  );
}
