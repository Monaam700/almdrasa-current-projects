import "./CalorieRecordDate.css";
import StyledRecordCell from "./StyledRecordCell";

function CalorieRecordDate(props) {
  const year = props.recordDate.toLocaleDateString("default", {
    year: "numeric",
  });
  const month = props.recordDate.toLocaleDateString("default", {
    month: "long",
  });
  const day = props.recordDate.toLocaleDateString("default", {
    day: "numeric",
  });

  return (
    <StyledRecordCell>
      <div className="record-date-year">{year}</div>
      <div className="record-date-month">{month}</div>
      <div className="record-date-day">{day}</div>
    </StyledRecordCell>
  );
}

export default CalorieRecordDate;
