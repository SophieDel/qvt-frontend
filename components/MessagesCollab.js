import styles from "../styles/MessageCollab.module.css";
import moment from "moment";

const URL_BACKEND = require("../modules/url_backend");

function MessageCollab(props) {

  console.log ("date:" , moment(props.dateRecep).format ('DD-MM-YYYY') );
  // console.log (props.dateRecep);
//   console.log( "type props.lien", typeof(props.lien))
//   console.log(typeof(props.lien) == "string")

const handleSupprimer = () => {

  props.compteur(props.message);
  fetch(`${URL_BACKEND}/messages/messagesup` , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  message: props.message }),
  }).then(response => response.json())
  .then(data => {
        
    console.log ("data:" ,data)
        if (data) {
       
            }else {
          
              }})

  // setPlan('');
};



  return (
    <div className={styles.container}>
      <div>
        <div className={styles.labeldate}>Date d'envoi: 
        <div className={styles.date}>{moment(props.dateRecep).format('DD-MM-YYYY')}</div>
      </div>
        <div className={styles.label}>Message envoyé: 
        <div className={styles.messageenvoye}>{props.message}</div>
        </div>
        </div>
        <div>
        <div className={styles.labeldate}>Date de réponse: 
        <div className={styles.date}>{moment(props.dateReponse).format('DD-MM-YYYY')}</div>
        </div>
        <div>
        <div className={styles.label}>Réponse du manager: 
        <div className={styles.question}>{props.reponse}</div>
        <button className={styles.btn} onClick={() => handleSupprimer()}>Supprimer</button>
        </div>
        </div>
        </div>
      </div>
  );
}

export default MessageCollab;
