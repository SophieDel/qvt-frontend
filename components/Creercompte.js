import styles from '../styles/Creercompte.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{login} from '../reducers/user';
import React from 'react';

function Creercompte() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [signUpPrenom, setSignUpPrenom] = useState('');
    const [signUpNom, setSignUpNom] = useState('');
    const [signUpMdp, setSignUpMdp] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPoste, setSignUpPoste] = useState('');
    const [signUpGenre, setSignUpGenre] = useState('');
    const [signUpEquipe, setSignUpEquipe] = useState('');
    const [signUpService, setSignUpService] = useState('');


    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ genre: signUpGenre, prenom: signUpPrenom, nom: signUpNom, email: signUpEmail, mdp: signUpMdp, poste: signUpPoste, equipe: signUpEquipe, service: signUpService }),
        })
        .then(response => response.json())
            .then(data => {
        console.log('data', data)
                if (data.result) {
                    dispatch(login({token: data.token }))
                    // dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                    setSignUpPrenom('');
                    setSignUpNom('');
                    setSignUpMdp('');
                    setSignUpEmail('');
                    setSignUpPoste('');
                    setSignUpGenre('');
                    setSignUpEquipe('');
                    setSignUpService('');
        // window.location.href = "/questionnaire"

                }else {
    
        console.log("marche pas")

        }
            });
    };
    console.log(signUpGenre)

    // const handleChange = (e) => {
    //     this.setState({selectValue:e.target.value});

    //     }
    return (
        <div>
        <Headervert />
<div className={styles.contain}>
    <div className={styles.titre}>Pour créer votre compte, veuillez renseigner les champs suivants</div>
    <div className={styles.select}>

    <label>Veuillez selectionner votre genre</label>
    <select className={styles.selecttext} value={signUpGenre} onChange={(e) => setSignUpGenre(e.target.value)}>
        
        <option value>---Genre---</option>
        <option value="masculin">Masculin</option>
        <option value="feminin">Feminin</option>
        <option value="neutre">Neutre</option>
</select>
</div>
<input type="text" placeholder="Prénom" className={styles.input} onChange={(e) => setSignUpPrenom(e.target.value)} value={signUpPrenom} />
<input type="text" placeholder="Nom" className={styles.input} onChange={(e) => setSignUpNom(e.target.value)} value={signUpNom} />
<input type="email" placeholder="Email" className={styles.input} onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} />
<input type="password" placeholder="Mot de passe" className={styles.input} onChange={(e) => setSignUpMdp(e.target.value)} value={signUpMdp}/>
<input type="text" placeholder="Poste" className={styles.input} onChange={(e) => setSignUpPoste(e.target.value)} value={signUpPoste}/>
<div className={styles.select}>
    <label>Veuillez selectionner votre équipe</label>
    <select className={styles.selecttext} value={signUpEquipe} onChange={(e) => setSignUpEquipe(e.target.value)}>
        <option value="vide"></option>
        <option value="equipe1">Equipe 1</option>
        <option value="equipe2">Equipe 2</option>
        <option value="equipe3">Equipe 3</option>
</select>
</div>
<div className={styles.select}>
<label>Veuillez selectionner votre service</label>
<select className={styles.selecttext} value={signUpService} onChange={(e) => setSignUpService(e.target.value)}>
        <option value="vide"></option>
        <option value="service1">Service 1</option>
        <option value="service2">Service 2</option>
        <option value="service3">Service 3</option>
</select>
</div>
{/*<div className={styles.optin}>
Je suis manager de mon équipe
    <div className={styles.ouinon}>
    <input type="radio" id="oui"
    name="oui" value="oui"/>
    <label for="oui">Oui</label>

    <input type="radio" id="non"
    name="non" value="non"/>
    <label for="non">Non</label>
    </div>
</div>
<div className={styles.optin}>
J’accepte de recevoir les offres commerciales de QVT
<div className={styles.ouinon}>
    <input type="radio" id="oui"
    name="oui" value="oui"/>
    <label for="oui">Oui</label>

    <input type="radio" id="non"
    name="non" value="non"/>
    <label for="non">Non</label>
</div>
</div>
<div className={styles.optin}>
    J’accepte de recevoir des offres commerciales des partenaires de QVT
    <div className={styles.ouinon}>
    <input type="radio" id="oui"
    name="oui" value="oui"/>
    <label for="oui">Oui</label>

    <input type="radio" id="non"
    name="non" value="non"/>
    <label for="non">Non</label>
</div>
</div>
<div className={styles.checkbox}>
<input type="checkbox"/>J’ai pris connaissance et j’accepte les Conditions Générales d’Utilisation et de Participation que la Politique de confidentialité de QVT
</div> */}
<div className={styles.btn}>
<button className={styles.btnretour}>Retour</button>
<button className={styles.btncreer} onClick={() => handleRegister()}>Créer un compte</button>
</div>
</div>

        <Footervert />
        </div>
    );
    console.log(signUpGenre)
    }
    
    export default Creercompte;