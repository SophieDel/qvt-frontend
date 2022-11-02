import ProfileInfo from "../components/ProfileInfo";
import styles from "../styles/Profil.module.css";
import Link from "next/link";
import Headerblanc from "../components/Headerblanc";
import Footerblanc from "../components/Footerblanc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Modal, Button, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";
import Menu from "../components/Menu";
import MessageCollab from "../components/MessagesCollab";

// function profil() {
// return <Profil />

// }

function profil() {
  const user = useSelector((state) => state.user.value);
  const [MessagesData, setMessagesData] = useState([]);

  let userInfoUsed = ["prenom", "nom", "equipe"];
  const profil = userInfoUsed.map((infoName, i) => {
    return <ProfileInfo key={i} infoName={infoName} info={user[infoName]}></ProfileInfo>;
  });

  return (
    <div className={styles.main}>
      <Headerblanc />
      <div className={styles.contain}>
        <Menu />
        <div className={styles.profil}>
          <div className={styles.titre}>Mon profil</div>
          <div className={styles.infos}>{profil}</div>
          <div className={styles.boutons}>
            <Button className={styles.btn} href="/dashboard">
              Retour
            </Button>
            {/* <Button className={styles.btn}>Modifier</Button> */}
          </div>
        </div>
      </div>
      <Footerblanc />
    </div>
  );
}

export default profil;
