import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState, useEffect } from "react";
import { getDateFromString, getDateStringNoTimezone } from "../../utils";

function ListingSection({ allRecords }) {
  const [currentDate, setCurrentDate] = useState(null);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const getUser = async () => {
      console.log("Making a new HTTP request");
      const response = await fetch(
        "https://raw.githubusercontent.com/Monaam700/almdrasa-current-projects/main/data.json"
      );
      const data = await response.json();
      setUser({
        id: data.id,
        firstName: data["first_name"],
        lastName: data["last_name"],
      });
    };

    getUser();
  }, []);

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
      {user && (
        <div>
          <p>{user.id}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
      )}
    </>
  );
}

export default ListingSection;
