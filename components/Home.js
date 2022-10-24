import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';


function Home() {
  return (
    <div>
      <Headervert />
      <main className={styles.main}>
        <div className={styles.prez}>Netus et malesuada fames ac. Sit amet volutpat consequat mauris. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Risus pretium quam vulputate dignissim suspendisse in est. A condimentum vitae sapien pellentesque habitant. Nulla malesuada pellentesque elit eget. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Volutpat diam ut venenatis tellus. Morbi tempus iaculis urna id volutpat lacus laoreet non. </div>
        <div className={styles.contain}>
        <input type="email" placeholder="Email" className={styles.inputemail}/>
        <input type="password" placeholder="Mot de passe" className={styles.inputmdp}/>
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
        <button className={styles.btnlogin}>Connexion</button>
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
