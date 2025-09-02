import "./RecordList.css";
import CalorieRecord from "./components/CalorieRecord";

function RecordList(props) {
  return (
    <>
      <CalorieRecord
        recordDate={new Date(2023, 9, 1)}
        content="Breakfast"
        meal="Oatmeal"
        calorie="150"
      />
    </>
  );
}

export default RecordList;
