import styles from '../styles/Profil.module.css';
import Link from 'next/link';
import Headerblanc from './Headerblanc';
import Footerblanc from './Footerblanc';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{login} from '../reducers/user';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu'
import MessageCollab from "./MessagesCollab";
import Message from '../../qvt-backend/models/messages';

function DashboardManager() {

    const user = useSelector((state) => state.user.value);
    const [MessagesData, setMessagesData] = useState([]);

    // Display des messages  à l'initialisation,   
    useEffect(() => {
      fetch(`http://localhost:3000/messages/MessageManager/${user.equipe}`)
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
<div className={styles.profil}>
    <div className={styles.titre}>Mon profil</div>
    <div className={styles.infos}></div>
    <div className={styles.boutons}>
<Button className={styles.btn} href = "/dashboard">Retour</Button>
<Button className={styles.btn}>Modifier</Button>
</div>
</div>
<div className={styles.articlesContainer}>{messages}</div>
</div>
    <Footerblanc />
</div>
);
}

export default DashboardManager;