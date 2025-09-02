import styles from "./CalorieRecordDate.module.css";
import StyledRecordCell from "../common/StyledRecordCell";

const MONTH = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function CalorieRecordDate(props) {
	// we will use unified date format instead of UTC
	const month = MONTH[props.date.getMonth()];
	const day = props.date.getDate();
	const year = props.date.getFullYear();

	return (
		<StyledRecordCell className={styles.styledRecordCell}>
			<div className={styles["record-date-month"]}>{month}</div>
			<div className={styles["record-date-day"]}>{day}</div>
			<div className={styles["record-date-year"]}>{year}</div>
		</StyledRecordCell>
	);
}

export default CalorieRecordDate;
