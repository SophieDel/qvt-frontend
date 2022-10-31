import styles from '../styles/DashboardM.module.css';
import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space } from 'antd';
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import MessageManager from "./MessagesMnger";

const URL_BACKEND = require("../modules/url_backend");

function DashboardM() {

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);
    const [count, setCount] = useState(0);
    const [Reponse, setReponse] = useState('');

    const handleRepondre = () => {

        // console.log("reponse:" ,Reponse);
        fetch(`${URL_BACKEND}/messages/MessageReponse`, {
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
    <div className={styles.container}>
      <div>
        <div className={styles.labeldate}>Date d'envoi: 
        <div className={styles.date}>{props.dateRecep}</div>
      </div>
        <div className={styles.label}>Message envoyé: 
        <div className={styles.messageenvoye}>{props.message}</div>
        </div>
        </div>
        <input type="text" placeholder="Votre réponse" className={styles.input}onChange={(e) => setReponse(e.target.value)} value={Reponse}  />
        <button className={styles.btn} onClick={() => handleRepondre()}>Envoyer</button>
        </div>

  );



    // Display des messages  à l'initialisation,   
    useEffect(() => {
      fetch(`${URL_BACKEND}/messages/MessageEquipe/${user.equipe}`)
        .then((response) => response.json())
        .then((data) => {
  
          setMessagesData(data.data);
          setCount(count+1)
          console.log(MessagesData);
        });
    }, [count]);
  
    let messages
    if (MessagesData){ messages= MessagesData.map((data, i) => {
      return <MessageManager key={i} {...data} />;
    })} else {
        messages =<></>
    };
    
return (
    <div className={styles.main}>
    <Headerblanc />
<div className={styles.contain}>
<Menu />
<div className={styles.messagesContainer}>{messages}</div>
</div>
    <Footerblanc />
</div>
);
}

export default DashboardM;