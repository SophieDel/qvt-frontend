import styles from "../styles/Questionnaire.module.css";
import Headervert from "../components/Headervert";
import Footervert from "../components/Footervert";
import { useSelector } from "react-redux";
const inituleQuestions = require("../public/intituleQuestionsPerso")
import QuestionRepondue from "../components/QuestionRepondue";

function QuestionnaireAffiche() {
  const user = useSelector((state) => state.user.value);

  const questionsRepondues = inituleQuestions.map((data, i) => {

    let inituleQuestion = Object.values(data)[0].question
    let reponse = Object.values(user.reponses[i])[0]
    
    return (
        <QuestionRepondue question={inituleQuestion} reponse={reponse}>

        </QuestionRepondue>
    );
  });

  return (
    <div>
      <Headervert />
      <div className={styles.questions}>{questionsRepondues}</div>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={() => (window.location.href = "/dashboard")}>
          Retour au Dashboard
        </button>
      </div>
      <Footervert />
    </div>
  );
}

export default QuestionnaireAffiche;
