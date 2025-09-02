import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "./StyledRecordCell";
function CalorieRecord(props) {
  return (
    <>
      <ul className="record">
        <li>
          <CalorieRecordDate recordDate={props.recordDate} />
        </li>
        <li>{props.content}</li>
        <li>{props.meal}</li>
        <li className="record-calories">
          <StyledRecordCell>{props.calorie}</StyledRecordCell>
        </li>
      </ul>
    </>
  );
}

export default CalorieRecord;
