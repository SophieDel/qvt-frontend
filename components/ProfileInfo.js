import styles from "../styles/ProfileInfo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeProfilInfo } from "../reducers/user";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from 'react-modal';

function ProfileInfo(props) {

  const [modalVisible, setModalVisible] = useState(false)
  const [valueInput, setValueInput] = useState(null)

  const dispatch = useDispatch()

  const handleChange = () => {
    console.log({infoName: props.infoName, info: valueInput})
    dispatch(changeProfilInfo({infoName: props.infoName, info: valueInput}))
    setModalVisible(false)
    setValueInput(null)
  }

  const formattedInfoName = props.infoName[0].toUpperCase().concat(props.infoName.slice(1))
  return <div className={styles.profilSection}>
    <div className={styles.infoDiv}> <span className={styles.infoName}>{formattedInfoName} : </span> <span className={styles.info}>{props.info}</span></div>
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={faPencil} onClick = {() => {setModalVisible(true)}}/>
      <span className={styles.tooltiptext}>Cliquez pour modifier le {props.infoName}</span>
      </div>
      <div className={styles.modalContainer}>
      <Modal
      className={styles.modal}
           isOpen={modalVisible}
           contentLabel="Minimal Modal Example"
           overlayClassName={styles.overlay}
        >
          {/* <div style={styles.modalView}> */}
        {/* <div style={styles.centeredView}>
          <div style={styles.modalView}>
            <p>Hello</p> */}
            <div className={styles.inputContainer}>
            <input className={styles.input} type="text" placeholder={`Entrer votre ${props.infoName}`} value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
            <button className={styles.button} onClick={() => handleChange()}> <span className={styles.text}>Entrer</span></button>
            </div>
            <div className={styles.closeButtonDiv}>
            <button className={styles.button} onClick={() => setModalVisible(false)}> <span className={styles.text}>Fermer</span></button>
            </div>
</Modal>
</div>
  </div>;
}

export default ProfileInfo;
