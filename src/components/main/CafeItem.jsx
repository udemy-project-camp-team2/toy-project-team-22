import { useState } from "react";
import styles from "../../styles/Main.module.css";
import { useNavigate } from "react-router-dom";

const CafeItem = ({ cafe }) => {
  const [isLiked, setIsLiked] = useState(true);
  const navigate = useNavigate();

  const changeLikeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <li className={styles.cafe__list}>
      <img
        className={styles.cafe__img}
        src={cafe.src}
        alt={cafe.name}
        loading="lazy"
        onClick={() => navigate(`/cafe/${cafe.id}`)}
      />
      <ul className={styles.cafe__info}>
        <li>
          <h3>{cafe.name}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? "#ff0000" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={changeLikeHandler}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </li>
        <li>{cafe.location}</li>
        <li>
          {cafe.keywords.map((keyword) => (
            <span className={styles.cafe__keywords} key={keyword}>
              {keyword}
            </span>
          ))}
        </li>
      </ul>
    </li>
  );
};

export default CafeItem;
