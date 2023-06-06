import "./ItemDetail.css";

export default function ItemDetail({ status, textContent, dateContent }) {
  const isComplete = status === "complete" ? true : false;
  return (
    <div className="itemdetail">
      <input type="checkbox" name="active" checked={isComplete} />
      <div className="itemdetail-content">
        <p
          className={`itemdetail-text ${
            isComplete ? "itemdetail-complete" : ""
          }`}
        >
          {textContent}
        </p>
        <p className="itemdetail-date">{dateContent}</p>
      </div>
    </div>
  );
}

// 3:00 AM, 01/06/2023
