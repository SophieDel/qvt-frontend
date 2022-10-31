import { Button, message } from "antd";
import styles from "../styles/MessagesMnger.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import{count1} from '../reducers/count';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";

const URL_BACKEND = require("../modules/url_backend");

function Plan(props) {
    const [Reponse, setReponse] = useState('');
    const user = useSelector((state) => state.user.value);


    // const handleRepondre = () => {
// //tunnel mis en place pour remonter l'info qu'un message est saisi en réponse pour mise à jour de la page des message dans dashboard manager
//       props.compteur(props.message);

      
//         // console.log("reponse:" ,Reponse);
//         fetch(`${URL_BACKEND}/PlanEquipe/${user.equipe}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ message : props.message , reponse: Reponse}),
          
//     })
//     .then(response => response.json())
//         .then(data => {
        
//             console.log ("data:" ,data)
//                 if (data) {
//                 setReponse('');
               

//                     }else {
                  
//                       }});

//     }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.labeldate}>Date du plan: 
        <div className={styles.date}>{moment(props.datePlan).format('DD-MM-YYYY')}</div>
      </div>
        <div className={styles.label}> 
        <div className={styles.messageenvoye}>{props.titre}</div>
        </div>
        <div className={styles.label}>
        <div className={styles.messageenvoye}>{props.message}</div>
        </div>
        </div>
        {/* <input type="text" placeholder="Votre réponse" className={styles.input}onChange={(e) => setReponse(e.target.value)} value={Reponse}  />
        <button className={styles.btn} onClick={() => handleRepondre()}>Envoyer</button> */}
        </div>

  );
}

export default Plan;
