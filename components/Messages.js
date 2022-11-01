import styles from '../styles/Messages.module.css';

import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import Menu from './Menu'
import MessageCollab from "./MessagesCollab";

const URL_BACKEND = require("../modules/url_backend");

function message() {

  const [count2, setCount2] = useState('');
      //fonction compteur pour transiter les infos de puis la fille (MessageCollab) vers la mere (Message)
      const compteur = (message) =>{
        setCount2(message.length);
    }
  

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);

    // Display des messages  à l'initialisation,   
    useEffect(() => {
      fetch(`${URL_BACKEND}/messages/MessageCollab/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          compteur (data.data);
    setMessagesData(data.data);
          console.log(MessagesData);
        });
    }, [count2]);
  
    const messages = MessagesData.map((data, i) => {
      return <MessageCollab key={i} {...data} compteur={compteur} />;
    });
    
return (
    <div className={styles.main}>
    <Headerblanc />
<div className={styles.contain}>
    
<Menu />
<div className={styles.messages}>
<div className={styles.titre}>Mes messages</div>
<div className={styles.messagesContainer}>{messages}</div>
</div>
</div>
    <Footerblanc />
</div>
);
}

export default message;