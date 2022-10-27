import styles from "../styles/Article.messages.css";


function MessageManager(props) {

  
//   console.log( "type props.lien", typeof(props.lien))
//   console.log(typeof(props.lien) == "string")

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>Date de l'envoi du message au manager: {props.dateRecep}</h3>
      </div>
      <div className={styles.container}>
        
        </div>
        <div className={styles.resume}>
          <p>Message envoyé: {props.message}</p>
        </div>
        <div className={styles.articleHeader}>
        <h3>Date de la réponse du manager: {props.dateReponse}</h3>
      </div>
      <div className={styles.container}>
        
        </div>
        <div className={styles.resume}>
          <p>Réponse du manager: {props.reponse}</p>
        </div>
       
      </div>

  );
}

export default MessageCollab;
