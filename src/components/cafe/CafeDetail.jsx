import React from "react";
import MapIcon from "../icons/MapIcon";
import ClockIcon from "../icons/ClockIcon";
import PhoneIcon from "../icons/PhoneIcon";
import styles from "../../styles/Cafe.module.css";

const CafeDetail = ({ cafe }) => {
  return (
    <section>
      <ul className={styles.detail__info}>
        <li>
          <img src={cafe.src} alt={cafe.name} />
        </li>
        <li>
          <ul className={styles.detail__contact}>
            <li>
              <MapIcon />
              {cafe.location}
            </li>
            <li>
              <ClockIcon />
              {cafe.business}
            </li>
            <li>
              <PhoneIcon />
              {cafe.phoneNum}
            </li>
          </ul>
          <div className={styles.detail__seat}>
            <button>좌석현황</button>
          </div>
        </li>
        <li>
          <strong style={{ color: "#000" }}>메뉴</strong>
          <ul className={styles.detail__menu}>
            <li>아메리카노 - 1000원</li>
            <li>라떼 - 1000원</li>
            <li>바닐라라떼 - 1000원</li>
            <li>아메리카노 - 1000원</li>
            <li>아메리카노 - 1000원</li>
            <li>아메리카노 - 1000원</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default CafeDetail;
