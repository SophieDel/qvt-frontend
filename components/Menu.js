import styles from '../styles/Menu.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"
import { Button } from 'antd';
import User from '../../qvt-backend/models/users';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import defaultRenderEmpty from 'antd/lib/config-provider/defaultRenderEmpty';


function Menu() {

const user =useSelector ((state) => state.user.value);

const [derniereSemaine, setDerniereSemaine] = useState(null);

let currentdate = new Date();
        var oneJan = new Date(currentdate.getFullYear(),0,1);
        var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        let semaine=Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);

  // récupération de la semaine de saisie du dernier questionnaire,   
  useEffect(() => {
    fetch(`http://localhost:3000/users/semaine/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
if(data.data.length>0){
setDerniereSemaine (data.data[(data.data.length)-1].semaine)}
else  { setDerniereSemaine(0) }

      });
  }, []);

   



   

let managerSection;
if (user.manager===true) {
  managerSection = (
    <Button href = "/dashboardManager" className={styles.liens}> Dashboard manager</Button>
  )};

  let userSection;
  if (user.manager===false) {
    userSection = (
        <div className={styles.titre}>MESSAGES
        <div>
        <Button href = "/messages" className={styles.liens}> Mes messages</Button>
        </div>
        </div>
    )};

    let qhebdoSection;
    if (derniereSemaine===semaine) {
      qhebdoSection = (
        <Button href = "/qhebdosaisi" className={styles.liens}> Quiz de la semaine</Button>
      )}else {
        qhebdoSection = (
        <Button href = "/qhebdo" className={styles.liens}> Quiz de la semaine</Button>
        )
      };

    return (
        <div className={styles.contain}>
            <div>
{/* <div className={styles.titre}>DASHBOARD
<div>
<Button href = "/dashboard" className={styles.liens}> Mon dashboard</Button></div>

</div> */}
<div className= {styles.menusection}>
<div>
<div className={styles.titre}>DASHBOARD
<div>
<div>
<Button href = "/dashboard" className={styles.liens}> Mon dashboard </Button>
</div>
<div>
{managerSection}
</div>
</div>
</div>

<div className={styles.titre}>QUIZ
<div>
<div>
{qhebdoSection}
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


{userSection}
</div>
<div>
<div className={styles.profil}>
<FontAwesomeIcon className={styles.icon} icon ={faUser} />

<Button href = "/profil" className={styles.liens}> {user.prenom}  {user.nom}<div>Mon profil</div></Button>


</div>
</div>
</div>
    </div>
    </div>
    );
    }
    
    export default Menu;