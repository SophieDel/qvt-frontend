import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { login} from '../reducers/user';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Space } from 'antd';


function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [MessCB, setMessCB] =  useState('');;

  const handleConnection = () => {

    fetch('http://localhost:3000/users/signin' , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: signInEmail, mdp: signInPassword }),
    }).then(response => response.json())
        .then(data => {
          console.log ("avant if", data)
            if (data.result) {
          
                dispatch(login({ token: data.token }));
                //, equipe: data.equipe, manager: data.manager
                console.log(data)
                console.log ("ok")
                setSignInEmail('');
                setSignInPassword('');
            //     // setIsModalVisible(false)
            //METTRE CONDITION DE RENVOI A DASHBOARD SI LE QUESTIONNAIRE A ETE REMPLI
                window.location.href = "/questionnaire"

            //     setOpen(false);
            // }    setOpen(false);
        }
        setOpen(true);
        setMessCB (data.error)
      });
};

let modalContent = (
  <div>
      <p>{MessCB}</p>
      <button id="CLOTURE" onClick={() => closeModale()}>FERMER</button>
  </div>
);

const closeModale  = () => {
  setOpen(false);
  console.log("fermeture")
}


  return (
    <div>
      <Headervert />
      <main className={styles.main}>
        <div className={styles.prez}>Netus et malesuada fames ac. Sit amet volutpat consequat mauris. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Risus pretium quam vulputate dignissim suspendisse in est. A condimentum vitae sapien pellentesque habitant. Nulla malesuada pellentesque elit eget. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Volutpat diam ut venenatis tellus. Morbi tempus iaculis urna id volutpat lacus laoreet non. </div>
        <div className={styles.contain}>
        <input type="email" placeholder="Email" className={styles.inputemail} onChange={(e) => setSignInEmail(e.target.value)} value={signInEmail}/>
        <input type="password" placeholder="Mot de passe" className={styles.inputmdp} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
        <div className={styles.ligne}>
        <div>
        <label className={styles.coche}>
        <input type="checkbox"/>Se souvenir de moi
        </label>
        </div>
        <div>
        <Link href = "/mdpoublie"> Mot de passe oublié ?</Link> 
        </div>
        </div>
        {open && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={open} closable={false} footer={null}>
					{modalContent}
				</Modal>
			</div>}
        <button className={styles.btnlogin} onClick={() => handleConnection()}>Connexion</button>
        <div className={styles.creer}>
        <Link href = "/creercompte" > Créer un compte</Link>
        </div>
        </div>
      </main>
      <div>
        <Link href="/dashboard"> go to dashboard</Link>
      </div>
      <div>
        <Link href="/questionnaire"> go to questionnaire</Link>
      </div>

      <Footervert />
    </div>
  );
  }

export default Home;
