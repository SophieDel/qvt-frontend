import styles from "../styles/ProfileInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfilInfo } from "../reducers/user";

import Modal from "react-modal";
import { updateOpenedModalName } from "../reducers/openedModalName";

const URL_BACKEND = require("../modules/url_backend");

function ProfileInfo(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [valueInput, setValueInput] = useState(null);

  const user = useSelector((state) => state.user.value);
  const openedModalName = useSelector((state) => state.openedModalName.value);

  const dispatch = useDispatch();

  useEffect(() => {
    if (openedModalName != props.infoName) {
      setModalVisible(false);
    }
  }, [openedModalName]);

  const handleChange = () => {
    dispatch(changeProfilInfo({ infoName: props.infoName, info: valueInput }));
    fetch(`${URL_BACKEND}/users/updateUser/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        infoName: props.infoName,
        info: valueInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setModalVisible(false);
    dispatch(updateOpenedModalName(null));
    setValueInput(null);
  };

  const onKeyPressChange = (e) => {
    if (e.key === "Enter") {
      handleChange();
    }
  };

  const formattedInfoName = props.infoName[0]
    .toUpperCase()
    .concat(props.infoName.slice(1));
  return (
    <div className={styles.profilSection}>
      <div className={styles.infoDiv}>
        {" "}
        <span className={styles.infoName}>{formattedInfoName} : </span>{" "}
        <span className={styles.info}>{props.info}</span>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faPencil}
          onClick={() => {
            setModalVisible(true);
            dispatch(updateOpenedModalName(props.infoName));
          }}
        />
        <span className={styles.tooltiptext}>
          Cliquez pour modifier le {props.infoName}
        </span>
      </div>
      <Modal
        className={styles.modal}
        isOpen={modalVisible}
        contentLabel="Minimal Modal Example"
        overlayClassName={styles.overlay}
      >
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder={`Entrer votre ${props.infoName}`}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            onKeyPress={(e) => onKeyPressChange(e)}
          />
          <button className={styles.button} onClick={() => handleChange()}>
            {" "}
            <span className={styles.text}>Entrer</span>
          </button>
        </div>
        <div className={styles.closeButtonDiv}>
          <button
            className={styles.button}
            onClick={() => {
              setModalVisible(false);
              setValueInput(null);
            }}
          >
            {" "}
            <span className={styles.text}>Fermer</span>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileInfo;
