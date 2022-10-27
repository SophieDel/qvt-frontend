import styles from '../styles/DashboardManager.module.css';
import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space } from 'antd';
import Menu from './Menu'
import MessageManager from "./MessagesMnger";

function DashboardManager() {

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);
    const [count, setCount] = useState(0);

    // Display des messages  à l'initialisation,   
    useEffect(() => {
      fetch(`http://localhost:3000/messages/MessageEquipe/${user.equipe}`)
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

export default DashboardManager;