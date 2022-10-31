import Headervert from './Headervert';
import Footervert from './Footervert';


function AccueilQuestionnaire () {
    return (
        <div>
            <Headervert />
            <h1> Questionnaire </h1>
            <p> Quelques lignes d'explications sur le questionnaire et son fonctionnement </p>
            <button> Accéder au questionnaire </button>
            <div className={phantom}></div>
            <Footervert />
        </div>
    )
}