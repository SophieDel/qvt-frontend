import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { Button } from 'antd';
import User from '../../qvt-backend/models/users';
import { useSelector } from 'react-redux';


function Menu() {

const user =useSelector ((state) => state.user.value);
console.log ("nom",user);

    return (
        <div className={styles.contain}>
            <div>
{/* <div className={styles.titre}>DASHBOARD
<div>
<Button href = "/dashboard" className={styles.liens}> Mon dashboard</Button></div>

</div> */}

<div className={styles.titre}>DASHBOARD
<div>
<div>
<Button href = "/dashboard" className={styles.liens}> Mon dashboard </Button>
</div>
<div>
<Button href = "/dashboardManager" className={styles.liens}> Dashboard manager</Button>
</div>
</div>
</div>

<div className={styles.titre}>QUIZ
<div>
<div>
<Button href = "/qhebdo" className={styles.liens}> Quiz de la semaine</Button>
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
<div className={styles.titre}>MESSAGES
<div>
<Button href = "/messages" className={styles.liens}> Mes messages</Button></div>
</div>
</div>
<div>
<div className={styles.profil}>
<FontAwesomeIcon className={styles.icon} icon ={faUser} />

<Button href = "/profil" className={styles.liens}> {user.prenom}  {user.nom}Mon profil</Button>


</div>
</div>
    </div>
    );
    }
    
    export default Menu;