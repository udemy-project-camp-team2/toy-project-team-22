import React from "react";
import styles from '../styles/Landing.module.css'
import LogoImg from '../images/logo.png'
import Barista from '../components/icons/BaristaImg'
import { useNavigate } from "react-router-dom";



const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.landing}>
      <h1 className={styles.logo}>
        Give MY__<br/>Seat
        <img src={LogoImg} />
      </h1>
      <span className={styles.btnLogin} onClick={() => { navigate('./login')}}>
        카카오 로그인으로 시작하기
      </span>
      <div className={styles.barista}>
        <Barista/>
      </div>
      
    </div>
  )
};

export default Landing;