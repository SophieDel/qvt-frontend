import styles from "../styles/ProfileInfo.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function ProfileInfo(props) {
  return <div className={styles.profilSection}>
    <div className={styles.infoDiv}> <span className={styles.infoName}>{props.infoName} : </span> <span className={styles.info}>{props.info}</span></div>
    <div className={styles.iconContainer}>
      <FontAwesomeIcon icon={faPencil} />
      <span className={styles.tooltiptext}>Modifier le {props.infoName}</span>
      </div>
  </div>;
}

export default ProfileInfo;
