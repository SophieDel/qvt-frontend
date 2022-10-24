import styles from '../styles/Headerblanc.module.css';

function Headerblanc() {
return (
    <div className={styles.main}>
    <img src='qvt.jpeg' className={styles.logo}/>   
    <div className={styles.btnlogout}>Deconnexion</div>
    </div>
);
}

export default Headerblanc;
