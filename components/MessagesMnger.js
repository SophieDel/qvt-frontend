import { Button, message } from "antd";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { count } from "../../qvt-backend/models/messages";


function MessageManager(props) {
     const [Reponse, setReponse] = useState('');
     const [count, setCount] = useState(0);


    const handleRepondre = () => {

       
        console.log("reponse:" ,Reponse);
        fetch(`http://localhost:3000/messages/MessageReponse`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message : props.message , reponse: Reponse}),
          
    })
    .then(response => response.json())
        .then(data => {
            console.log ("data:" ,data)
                if (data) {
                setReponse('');
                setCount(count+1)

                    }else {
                  
                         }});

                       
           }

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>Date de l'envoi du message au manager: {props.dateRecep}</h3>
      </div>
      <div className={styles.container}>
        
        </div>
        <div className={styles.resume}>
          <p>Message envoyé au manager: {props.message}</p>
        </div>
        <input type="text" placeholder="Votre réponse" className={styles.input}onChange={(e) => setReponse(e.target.value)} value={Reponse}  />
        <button className={styles.btnlogin} onClick={() => handleRepondre()}>Envoyer la réponse</button>
         </div>

  );
}

export default MessageManager;
