import Headervert from "../components/Headervert";
import Footervert from "../components/Footervert";
import styles from '../styles/AccueilQuestionnaire.module.css';


function AccueilQuestionnaire () {
    return (
        // <div>  
        //     <Headervert />
        //      <div className={styles.contain}>
        //       <h1 className={styles.titre}> Questionnaire </h1>
        //        <p> Quelques lignes d'explications sur le questionnaire et son fonctionnement </p>
        //         <button className={styles.btnaccederquest}> Accéder au questionnaire </button>
        //         <div className={styles.phantom}></div>
        //      </div>            
        //     <Footervert />        
        // </div>
              <div className={styles.container}>  
            <Headervert />
             <div className={styles.contain}>
              <h1 className={styles.titre}> Questionnaire </h1>
               <p> Quelques lignes d'explications sur le questionnaire et son fonctionnement </p>
                <button className={styles.btnaccederquest}> Accéder au questionnaire </button>
                <div className={styles.phantom}></div>
             </div>            
            <Footervert />        
        </div>
    )
}

export default AccueilQuestionnaire;

