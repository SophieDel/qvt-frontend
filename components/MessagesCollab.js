import styles from "../styles/MessageCollab.module.css";


function MessageCollab(props) {

  
//   console.log( "type props.lien", typeof(props.lien))
//   console.log(typeof(props.lien) == "string")

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.labeldate}>Date d'envoi: 
        <div className={styles.date}>{props.dateRecep}</div>
      </div>
        <div className={styles.label}>Message envoyé: 
        <div className={styles.messageenvoye}>{props.message}</div>
        </div>
        </div>
        <div>
        <div className={styles.labeldate}>Date de réponse: 
        <div className={styles.date}>{props.dateReponse}</div>
        </div>
        <div>
        <div className={styles.label}>Réponse du manager: 
        <div className={styles.question}>{props.reponse}</div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default MessageCollab;
