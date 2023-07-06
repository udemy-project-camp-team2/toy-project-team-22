import { useState } from "react";
import styles from "../../styles/Main.module.css";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../icons/HeartIcon";
const CafeItem = ({ cafe }) => {
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(true);

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
          <HeartIcon isLiked={isLiked} onClick={changeLikeHandler} />
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
