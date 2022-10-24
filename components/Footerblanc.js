import styles from '../styles/Footerblanc.module.css';

function Footerblanc() {
return (
    <div className={styles.main}>
        <div className={styles.qvt}>@2022 QVT</div>
        <div className={styles.rs}>
        <img src='fb.png' className={styles.logofb}/>
        <img src='in.png' className={styles.logoin}/>
        <img src='insta.png' className={styles.logoinsta}/>
        <img src='twitter.png' className={styles.logotwitter}/>
        </div>
        <div className={styles.liens}>
            <div>FAQ</div>
            <div>Nous contacter</div>
            <div>Mentions légales</div>
        </div>
    </div>
);
}

export default Footerblanc;
