import styles from "../styles/Questionnaire.module.css";
import Headervert from "../components/Headervert";
import Footervert from "../components/Footervert";
// import * as inituleQuestions from "../public/intituleQuestionsPerso";
// inituleQuestions = require("../public/intituleQuestionsPerso.json")
import Question from "../components/Question";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  clearReponses, updateProfil } from "../reducers/user";

const URL_BACKEND = require("../modules/url_backend");
const inituleQuestions = require("../public/intituleQuestionsPerso")

function Questionnaire() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  // A l'initialisation de la page, on veut cleaner le store
  if (user.profil === null){
    useEffect(() => {
      dispatch(clearReponses());
    }, []);
  }


  function transformObjectToArrayOfObjects(ob) {
    return Object.keys(ob).map(key => {
      return ({[key]: ob[key]})
      })
  }

  const handleSubmit = () => {

    fetch(`${URL_BACKEND}/questionnaire/reponses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reponses: transformObjectToArrayOfObjects(user.reponses), token: user.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateProfil(data.profil))
      });
    // Une fois les réponses enregistrées, on est redirigé automatiquement vers le dashboard
    window.location.href = "/dashboard";
  };

  const questions = inituleQuestions.map((data, i) => {
    return (
      <Question
        key={i}
        numeroQuestion={Object.keys(data)[0]}
        question={Object.values(data)[0].question}
        reponse={Object.values(data)[0].reponse}
      />
    );
  });

  return (
    <div>
      <Headervert />
      <div className={styles.questions}>{questions}</div>
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={() => handleSubmit()}>
          Soumettre le questionnaire
        </button>
      </div>
      <Footervert />
    </div>
  );
}

export default Questionnaire;
