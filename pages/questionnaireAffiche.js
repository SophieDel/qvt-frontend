// import styles from "../styles/Questionnaire.module.css";
import Headervert from "../components/Headervert";
import Footervert from "../components/Footervert";
import { useSelector } from "react-redux";
import * as inituleQuestions from "../public/intituleQuestionsPerso.json";

function QuestionnaireAffiche() {
  const user = useSelector((state) => state.user.value);

  const questionsRepondues = inituleQuestions.map((data, i) => {

    let inituleQuestion = Object.values(data)[0].question
    let reponse = Object.values(user.reponses[i])[0]
    
    return (
      <div>
        <p>{inituleQuestion}</p>
        <p>{reponse}</p>
      </div>
    );
  });

  return (
    <div>
      <Headervert />
      <div >{questionsRepondues}</div>
      <div >
        <button onClick={() => (window.location.href = "/dashboard")}>
          Retour au Dashboard
        </button>
      </div>
      <Footervert />
    </div>
  );
}

export default QuestionnaireAffiche;
