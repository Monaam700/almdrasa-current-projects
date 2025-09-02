import "./CalorieRecordDate.css";
import StyledRecordCell from "./StyledRecordCell";

function CalorieRecordDate({ recordDate }) {
  // تأكد إنه Date object حتى لو جالك string
  const date = recordDate instanceof Date ? recordDate : new Date(recordDate);

  const year = date.toLocaleDateString("default", { year: "numeric" });
  const month = date.toLocaleDateString("default", { month: "long" });
  const day = date.toLocaleDateString("default", { day: "numeric" });

  return (
    <StyledRecordCell>
      <div className="record-date-year">{year}</div>
      <div className="record-date-month">{month}</div>
      <div className="record-date-day">{day}</div>
    </StyledRecordCell>
  );
}

export default CalorieRecordDate;
