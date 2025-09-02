import { useState } from "react";
import ListingSection from "./components/calorieRecordSection/ListingSection";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import Modal from "react-modal";
import styles from "./App.module.css";
import { getDateFromString } from "./utils";
import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "calorie_records";

function App() {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  }
  function load() {
    const storedRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedRecords !== null && storedRecords !== "undefined") {
      setRecords(JSON.parse(storedRecords));
      const parsed = JSON.parse(storedRecords).map((r) => ({
        ...r,
        date: new Date(r.date), // ✅ نحوله من string لـ Date
      }));
      setRecords(parsed);
    } else {
      setRecords([]);
    }
  }
  // تحميل من localStorage مرة واحدة عند الماونت
  useEffect(() => {
    load();
  }, []);

  // حفظ أي تعديل في records
  useEffect(() => {
    if (records.length > 0) {
      save();
    }
  }, [records]);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "0px",
      borderRadius: "var(--theme-border-radius-smooth)",
    },
    overlay: {
      background: "rgba(0,0,0,.5)",
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      id: crypto.randomUUID(),
      ...record,
      date: getDateFromString(record.date),
    };
    setRecords((prevRecords) => [formattedRecord, ...prevRecords]);

    handleCloseModal();
  };

  return (
    <div className="App">
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <CaloriesRecordEdit
          onFormSubmit={formSubmitHandler}
          onCancel={handleCloseModal}
        />
      </Modal>

      {records && <ListingSection allRecords={records} />}
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track food
      </button>
    </div>
  );
}

export default App;
