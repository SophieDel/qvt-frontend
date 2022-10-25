import styles from '../styles/Creercompte.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Creercompte() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [signUpPrenom, setSignUpPrenom] = useState('');
    const [signUpNom, setSignUpNom] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPoste, setSignUpPoste] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prenom: signUpPrenom, nom: signUpNom, password: signUpPassword, email: signUpEmail, poste: signUpPoste }),
        }).then(response => response.json())
            .then(data => {
        console.log(data)
                if (data.result) {
                    dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                    setSignUpPrenom('');
                    setSignUpNom('');
                    setSignUpPassword('');
                    setSignUpEmail('');
                    setSignUpPoste('');
        window.location.href = "/questionnaire"

                }else {
    
        console.log("marche pas")

        }
            });
    };

    return (
        <div>
        <Headervert />
<div>
    <div className={styles.select}>Veuillez selectionner votre Genre
<select>
    
    <label>Genre</label>
  <option value="vide"></option>
  <option value="masculin">Masculin</option>
  <option value="feminin">Feminin</option>
  <option value="neutre">Neutre</option>
</select>
</div>
<input type="text" placeholder="Prénom" className={styles.input} onChange={(e) => setSignUpPrenom(e.target.value)} value={signUpPrenom} />
<input type="text" placeholder="Nom" className={styles.input} onChange={(e) => setSignUpNom(e.target.value)} value={signUpNom} />
<input type="email" placeholder="Email" className={styles.input} onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail} />
<input type="password" placeholder="Mot de passe" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
<input type="text" placeholder="Poste" className={styles.input} onChange={(e) => setSignUpPoste(e.target.value)} value={signUpPoste}/>
<div className={styles.select}>Veuillez selectionner votre équipe
<select>
    
    <label>Genre</label>
  <option value="vide"></option>
  <option value="equipe1">Equipe 1</option>
  <option value="equipe2">Equipe 2</option>
  <option value="equipe3">Equipe 3</option>
</select>
</div>
<div className={styles.select}>Veuillez selectionner votre service
<select>
    
    <label>Genre</label>
  <option value="vide"></option>
  <option value="service1">Service 1</option>
  <option value="service2">Service 2</option>
  <option value="service3">Service 3</option>
</select>
</div>
<div>
  Je suis manager de mon équipe
    <input type="radio" id="oui"
     name="oui" value="oui"/>
      <label for="oui">Oui</label>

    <input type="radio" id="non"
     name="non" value="non"/>
    <label for="non">Non</label>
  </div>
<div>
  J’accepte de recevoir les offres commerciales de QVT
    <input type="radio" id="oui"
     name="oui" value="oui"/>
      <label for="oui">Oui</label>

    <input type="radio" id="non"
     name="non" value="non"/>
    <label for="non">Non</label>
  </div>
  <div>
    J’accepte de recevoir des offres commerciales des partenaires de QVT
  
    <input type="radio" id="oui"
     name="oui" value="oui"/>
      <label for="oui">Oui</label>

    <input type="radio" id="non"
     name="non" value="non"/>
    <label for="non">Non</label>
  </div>
  <input type="checkbox"/>J’ai pris connaissance et j’accepte les Conditions Générales d’Utilisation et de Participation que la Politique de confidentialité de QVT
<div className={styles.btn}>
<button className={styles.btnretour}>Retour</button>
<button className={styles.btncrer} onClick={() => handleRegister()}>Créer un compte</button>
</div>




</div>
        <Footervert />
        </div>
    );
    }
    
    export default Creercompte;