import styles from '../styles/Mentionslegales.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';

function Mentionslegales() {
    return (
        <div>
        <Headervert />
<div className={styles.contain}>
    <div className={styles.titre}>Mentions légales</div>
    <div className={styles.soustitre}>Editeur du Site</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Hebergeur</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Webdesign</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Crédits</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>

    <div className={styles.titre}>Politique de confidentialité</div>
    <div className={styles.soustitre}>Quelles sont les données personnelles traitées ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
    <div className={styles.soustitre}>Comment collectons-nous vos données personnelles ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
    <div className={styles.soustitre}>Pourquoi collectons-nous vos données personnelles ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
</div>
        <Footervert />
        </div>
    );
    }
    
    export default Mentionslegales;