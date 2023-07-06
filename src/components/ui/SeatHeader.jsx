import { useNavigate } from "react-router-dom";
import styles from "./SeatHeader.module.css";

const DetailHeader = ({ children, cafe }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.bg}>
    <header className={styles.header}>
      <span
        className="material-symbols-outlined"
        onClick={() => navigate(`/cafe/${cafe.id}`)}
        style={{ cursor: "pointer" }}
      >
        arrow_back_ios
      </span>
      <h2>{cafe.name}</h2>
      {children}
    </header>
    </div>
  );
};

export default DetailHeader;
