import styles from '../styles/Messages.module.css';

import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import Menu from './Menu'
import MessageCollab from "./MessagesCollab";

function message() {

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);

    // Display des messages  à l'initialisation,   
    useEffect(() => {
      fetch(`http://localhost:3000/messages/MessageCollab/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data des messages" ,data.data[0].message);
          setMessagesData(data.data);
          console.log(MessagesData);
        });
    }, []);
  
    const messages = MessagesData.map((data, i) => {
      return <MessageCollab key={i} {...data} />;
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