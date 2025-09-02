import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";
import { getDateFromString, getDateStringNoTimezone } from "../../utils";

function ListingSection({ allRecords }) {
  const [currentDate, setCurrentDate] = useState(null);

  const dateChangeHandler = (event) => {
    const value = event.target.value;
    if (!value) {
      setCurrentDate(null);
    } else {
      setCurrentDate(getDateFromString(value));
    }
  };

  const dateFilter = (record) =>
    currentDate &&
    record.date.getDate() === currentDate.getDate() &&
    record.date.getMonth() === currentDate.getMonth() &&
    record.date.getFullYear() === currentDate.getFullYear();

  const filteredRecords = currentDate
    ? allRecords.filter(dateFilter)
    : allRecords;

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="ListingDate">
        Select date
      </label>
      <input
        id="ListingDate"
        type="date"
        className={styles["listing-picker-input"]}
        value={currentDate ? getDateStringNoTimezone(currentDate) : ""}
        onChange={dateChangeHandler}
      />
      <button
        onClick={() => setCurrentDate(null)}
        className={styles["clear-button"]}
      ></button>
      <RecordList records={filteredRecords} />
    </>
  );
}

export default ListingSection;
