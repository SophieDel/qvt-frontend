import styles from '../styles/Faq.module.css';
import Link from 'next/link';
import Headervert from './Headervert';
import Footervert from './Footervert';

function FAQ() {
    return (
        <div>
        <Headervert />
        <div className={styles.contain}>
    <div className={styles.titre}>FAQ</div>
    <div className={styles.soustitre}>Que voit mon employeur ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Les messages envoyés à mon manager sont-ils bien anonymes ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Le questionnaire hebdo est-il obligatoire ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>Je n'ai plus les mêmes sensations, puis-je refaire le questionnaire perso ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. </div>
    <div className={styles.soustitre}>A quoi sert un plan d'action ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
    <div className={styles.soustitre}>Comment est fait mon plan personnalisé ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
    <div className={styles.soustitre}>Mon manager peut-il voir mon plan personnel ?</div>
    <div className={styles.texte}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Pretium aenean pharetra magna ac placerat vestibulum lectus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Mattis pellentesque id nibh tortor id. Vitae turpis massa sed elementum tempus egestas sed. </div>
</div>
        <Footervert />
        </div>
    );
    }
    
    export default FAQ;