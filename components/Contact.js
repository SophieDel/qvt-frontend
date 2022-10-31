import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';

function Contact() {
    return (
        <div >
            <Headervert />
<div className={styles.contain}>
<div className={styles.titre}>Nous contacter</div>
<div className={styles.soustitre}>Par mail</div>
    <div className={styles.texte}>Notre équipe est disponible par mail : contact[@]qvt.com </div>
    <div className={styles.soustitre}>Par téléphone</div>
    <div className={styles.texte}>Nous sommes disponibles du lundi au vendredi de 9h à 18h et le samedi de 9h à 13. Veuillez composer le 01 01 01 01 01. </div>
    <div className={styles.soustitre}>Nous rencontrer</div>
    <div className={styles.texte}>Venez nous retrouver, le temps d'un café ou d'une petite visite de nos locaux. Ils sont situés 10 rue qualité de vie, 98000 Travail, France </div>
</div>
            <Footervert />
        </div>
    );
    }
    
    export default Contact;