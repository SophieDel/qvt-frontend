import styles from '../styles/DashboardManager.module.css';
import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space, message } from 'antd';
import Menu from './Menu'
import MessageManager from "./MessagesMnger";
import{count1} from '../reducers/count';

const URL_BACKEND = require("../modules/url_backend");

function DashboardManager() {

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);
    const [count, setCount] = useState('');
    const [titre, setTitre] = useState('');
    const [plan, setPlan] = useState('');

    //fonction compteur pour transiter les infos de puis la fille (MesszagesMnger) vers la mere (dashboardManager)
    const compteur = (message) =>{
        setCount(message.length);
    }

    // Mise à) jour des messages apres la réponse du manager,   
    useEffect(() => {
      fetch(`${URL_BACKEND}/messages/MessageEquipe/${user.equipe}`)
        .then((response) => response.json())
        .then((data) => {

            compteur (data.data);
          setMessagesData(data.data);
        //   setCount(count+1)
          console.log(MessagesData);
        });
    }, [count]);
  
    let messages
    if (MessagesData){ messages= MessagesData.map((data, i) => {
      return <MessageManager key={i} {...data} compteur={compteur} />;
    })} else {
        messages =<></>
    };

    const handleSoumettre = () => {

      fetch(`${URL_BACKEND}/messages/PlanManager/${user.token}` , {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titre: titre, message: plan }),
      }).then(response => response.json())
      setTitre('');
      setPlan('');
    };
    
return (
    <div className={styles.main}>
    <Headerblanc />
<div className={styles.contain}>
<Menu />
<div className={styles.messplan}>
<div className={styles.planContain}>
<div className={styles.titre}>Plan d'action</div>
<div className={styles.saisieplan}>
        <input type="text" placeholder="Titre du plan d'action" className={styles.inputtitre}onChange={(e) => setTitre(e.target.value)} value={titre}  />
        <input type="text" placeholder="Plan d'action" className={styles.inputplan}onChange={(e) => setPlan(e.target.value)} value={plan}  />
        
        <button className={styles.btn} onClick={() => handleSoumettre()}>Envoyer</button>
        </div>
</div>
<div className={styles.messagesContainer}>
  <div className={styles.titre}>Messages de votre équipe</div>
  {messages}</div>
</div>
</div>
    <Footerblanc />
</div>
);
}

export default DashboardManager;