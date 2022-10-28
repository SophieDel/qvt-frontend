import styles from "../styles/Questionnaire.module.css";
import Link from "next/link";
import Headervert from "../components/Headervert";
import Footervert from "../components/Footervert";
import * as inituleQuestions from "../public/intituleQuestionsPerso.json";
import Question from "../components/Question";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  clearReponses } from "../reducers/user";

const url = "http://localhost:3000";

function Questionnaire() {
  const user = useSelector((state) => state.user.value);
  console.log(user.reponses);
  const dispatch = useDispatch();

  // A l'initialisation de la page, on veut cleaner le tore
  useEffect(() => {
    dispatch(clearReponses());
  }, []);

  const handleSubmit = () => {
    console.log("submit", user.reponses);
    fetch(`${url}/questionnaire/reponses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reponses: Array.from(user.reponses) }),
      // body: JSON.stringify({ reponses: [{ 1: "a", 2: "b" }] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("request response =>", data);
      });
      // Une fois les réponses enregistrées, on est redirigé automatiquement vers le dashboard
      window.location.href = "/dashboard"
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
      <div className={styles.submit}>
        <button onClick={() => handleSubmit()}>
          Soumettre le questionnaire
        </button>
      </div>
      <Footervert />
    </div>
  );
}

export default Questionnaire;
