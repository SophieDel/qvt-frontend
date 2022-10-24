import styles from '../styles/Headervert.module.css';

function Headervert() {
return (
    <div className={styles.main}>
    <img src='qvt.jpeg' className={styles.logo}/>   
    <div className={styles.btnlogout}>Deconnexion</div>
    </div>
);
}

export default Headervert;
