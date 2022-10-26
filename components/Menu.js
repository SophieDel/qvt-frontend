import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { Button } from 'antd';


function Menu() {
    return (
        <div className={styles.contain}>
            <div>
<div className={styles.titre}>DASHBOARD
<div>
<Button href = "/dashboard" className={styles.liens}> Mon dashboard</Button></div>
</div>

<div className={styles.titre}>QUIZ
<div>
<div>
<Button href = "/qHebdo" className={styles.liens}> Quiz de la semaine</Button>
</div>
<div>
<Button href = "/questionnaire" className={styles.liens}> Mon questionnaire</Button>
</div>
</div>
</div>

<div className={styles.titre}>REPORTINGS
<div>
<Button href = "/reportings" className={styles.liens}> Mes reportings</Button></div>
</div>
</div>
<div>
<div className={styles.profil}>
<FontAwesomeIcon className={styles.icon} icon ={faUser} />

<Button href = "/profil" className={styles.liens}> Mon profil</Button>


</div>
</div>
    </div>
    );
    }
    
    export default Menu;