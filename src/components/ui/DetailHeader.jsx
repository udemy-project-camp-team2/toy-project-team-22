import { useNavigate } from "react-router-dom";
import styles from "./DetailHeader.module.css";

const DetailHeader = ({ children, cafe }) => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <span
        className="material-symbols-outlined"
        onClick={() => navigate("/main")}
        style={{ cursor: "pointer" }}
      >
        arrow_back_ios
      </span>
      <h2>{cafe.name}</h2>
      {children}
    </header>
  );
};

export default DetailHeader;
