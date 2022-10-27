import styles from '../styles/Creercompte.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{login} from '../reducers/user';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons';

function qhebdo() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [RepQ1, setRepQ1] = useState('');
    const [RepQ2, setRepQ2] = useState('');
    const [RepQ3, setRepQ3] = useState('');
    const [NoteQ1, setNoteQ1] = useState(0);
    const [NoteQ2, setNoteQ2] = useState(0);
    const [NoteQ3, setNoteQ3] = useState(0);
    const [open, setOpen] = useState(false);



const handleRegister = () => {

    //calcul du numéro de semaine pour envoi à collection
    let currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    let semaine=Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
    console.log (semaine)

    
    fetch(`http://localhost:3000/users/Qhebdo/${user.token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ semaine : semaine, Q1: NoteQ1, Q2: NoteQ2, Q3: NoteQ3 }),
    })
    .then(response => response.json())
        .then(data => {
            console.log('data', data)
                    if (data) {
                setNoteQ1(0);
                setNoteQ2(0);
                setNoteQ2(0);
                // setRepQ1('');
                // setRepQ2('');
                // setRepQ3('');
    window.location.href = "/dashboard"
                    }else {

                        console.log(data.error)
                        setOpen(true);
                
                }});
};
 // Etoiles notation Questions 1 2 et 3
const Q1Stars = [];
for (let i = 0; i < 10; i++) {
let style = { 'cursor': 'pointer' };
if (i < NoteQ1) {
style = { 'color': '#79AEA3', 'cursor': 'pointer' };
}
Q1Stars.push(<FontAwesomeIcon key={i} icon={faStar} onClick={() => setNoteQ1(i + 1)} style={style} className="note" />);
}

const Q2Stars = [];
for (let i = 0; i < 10; i++) {
let style = { 'cursor': 'pointer' };
if (i < NoteQ2) {
    style = { 'color': '#79AEA3', 'cursor': 'pointer' };
}
Q2Stars.push(<FontAwesomeIcon key={i} icon={faStar} onClick={() => setNoteQ2(i + 1)} style={style} className="note" />);
} 

const Q3Stars = [];
for (let i = 0; i < 10; i++) {
let style = { 'cursor': 'pointer' };
if (i < NoteQ3) {
    style = { 'color': '#79AEA3', 'cursor': 'pointer' };
}
Q3Stars.push(<FontAwesomeIcon key={i} icon={faStar} onClick={() => setNoteQ3(i + 1)} style={style} className="note" />);
}

//Modale dans le cas ou les 3 réponses ne sont pas données
let modalContent = (
    <div>
        <p>Merci de répondre aux 3 questions</p>
        <button id="CLOTURE" onClick={() => closeModale()}>FERMER</button>
    </div>
);

return (
    <div>
    <Headervert />
<div className={styles.contain}>
    <div className={styles.titre}>blablabla Merci de répondre au questionnaire hebdo blablabla</div>
Question 1 : sur une echelle de 1 à 10 blablabla
<span>{Q1Stars} </span>
{/* <input type="text" placeholder="Note de 1 à 10" className={styles.input} onChange={(e) => setRepQ1(e.target.value)} value={RepQ1} /> */}
Question 2 : sur une echelle de 1 à 10 blablabla 
<span>{Q2Stars} </span>
{/* <input type="text" placeholder="Note de 1 à 10" className={styles.input} onChange={(e) => setRepQ2(e.target.value)} value={RepQ2} />  */}
Question 3 : sur une echelle de 1 à 10 blablabla 
<span>{Q3Stars} </span>
{/* <input type="email" placeholder="Note de 1 à 10" className={styles.input} onChange={(e) => setRepQ3(e.target.value)} value={RepQ3} />  */}

<div className={styles.btn}>
<button className={styles.btnretour}>Retour</button>
<button className={styles.btncreer} onClick={() => handleRegister()}>Valider mon questionnaire</button>
{open && <div id="react-modals">
                <Modal getContainer="#react-modals" className={styles.modal} visible={open} closable={false} footer={null}>
                    {modalContent}
                </Modal>
            </div>}

</div>
</div>


    <Footervert />
    </div>
);
}

export default qhebdo;