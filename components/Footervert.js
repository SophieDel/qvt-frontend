import styles from '../styles/Footervert.module.css';
import Link from 'next/link';

function Footervert() {
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
            <div>
            <a href = "/faq" target="_blank" rel="noopener noreferrer"> FAQ</a>
            </div>
            <div>
            <a href = "/contact" target="_blank" rel="noopener noreferrer"> Nous contacter</a>
            </div>
            <div>
            <a href = "/mentionslegales" target="_blank" rel="noopener noreferrer"> Mentions légales</a>
            </div>
        </div>
    </div>
);
}

export default Footervert;
