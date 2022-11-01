import styles from '../styles/Qhebdosaisi.module.css';
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

function qhebdosaisi() {
   

return (
    <div className={styles.main}>
    <Headerblanc />
<div className={styles.contain}>
<Menu />
<div className={styles.questionnaire}>
    <div className={styles.titre}>Merci de répondre au questionnaire hebdomadaire</div>
<div className={styles.question}>
<div className={styles.qtitre}>Vous avez déja saisi le questionnaire de cette semaine. Rendez-vous lundi prochain </div>

</div>

<div className={styles.boutons}>
<Button className={styles.btn} href = "/dashboard">Retour</Button>
</div>

</div>
</div>



    <Footerblanc />


</div>
);
}

export default qhebdosaisi;