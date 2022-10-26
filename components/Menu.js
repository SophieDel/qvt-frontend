import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"


function Menu() {
    return (
        <div className={styles.contain}>
            <div>
<div className={styles.titre}>DASHBOARD
<div className={styles.soustitre}>Mon dashboard</div>
</div>

<div className={styles.titre}>QUIZ
<div className={styles.soustitre}>Quiz de la semaine</div>
<div className={styles.soustitre}>Mon questionnaire</div>
</div>

<div className={styles.titre}>REPORTINGS
    <div className={styles.soustitre}>Mes reportings</div>
</div>
</div>
<div>
<div className={styles.profil}>
<FontAwesomeIcon className={styles.icon} icon ={faUser} />
<div>Voir mon profil</div>
</div>
</div>
    </div>
    );
    }
    
    export default Menu;