import styles from "../styles/DashboardManager.module.css";
import Headerblanc from "./Headerblanc";
import Footerblanc from "./Footerblanc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import "reactjs-popup/dist/index.css";
import { Modal, Button, Space, message } from "antd";
import Menu from "./Menu";
import MessageManager from "./MessagesMnger";
import { count1 } from "../reducers/count";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const { prepareMeanByWeek } = require("../modules/prepareMeanByTeam");
const { uniqueAnswersByUser } = require("../modules/prepareMeanByTeam");
const URL_BACKEND = require("../modules/url_backend");

function DashboardManager() {
  const user = useSelector((state) => state.user.value);
  const [MessagesData, setMessagesData] = useState([]);
  const [count, setCount] = useState("");
  const [titre, setTitre] = useState("");
  const [plan, setPlan] = useState("");
  const [qhebdoEquipe, setQhebdoEquipe] = useState([]);

  //fonction compteur pour transiter les infos de puis la fille (MesszagesMnger) vers la mere (dashboardManager)
  const compteur = (message) => {
    setCount(message.length);
  };

  function computeMean(question) {
    return question["total"] / question["count"];
  }

  function translateMeanIntoStars(mean) {
    let starsArray = [];
    for (let i = 1; i <= 10; i++) {
      starsArray.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={mean >= i ? {} : { color: "#79AEA3" }}
          className={styles.icon}
        />
      );
    }
    return starsArray;
  }

  function makeReportingGraph(data) {
    let questions = [
      "Niveau de stress de votre équipe",
      "Confiance en vous de votre équipe",
      "Niveau de motivation de votre équipe",
    ];
    let res = Object.keys(data).map((weekName, i) => {
      let stars = Object.values(data[weekName]).map((reponse, j) => {
      return (
        <div key={j} className={styles.questionDiv}>
          <div>{questions[j]}</div>
          <div> {translateMeanIntoStars(computeMean(reponse))}</div>
        </div>
      )
    }
    );

      return (
        <div key={i} className={styles.weekDiv}>
          <div className={styles.weekNameDiv}>{`Semaine ${weekName}`}</div>
              {stars}
        </div>
      );
    });
    return res;
  }

  // Mise à) jour des messages apres la réponse du manager,
  useEffect(() => {
    fetch(`${URL_BACKEND}/messages/MessageEquipe/${user.equipe}`)
      .then((response) => response.json())
      .then((data) => {
        compteur(data.data);
        setMessagesData(data.data);
      });
  }, [count]);

  useEffect(() => {
    fetch(`${URL_BACKEND}/users/${user.equipe}/`)
      .then((response) => response.json())
      .then((data) => {
        let mapQHebdo = data.data.map((user) => user.QHebdo);
        let dataForReporting = prepareMeanByWeek(
          uniqueAnswersByUser(mapQHebdo)
        );
        setQhebdoEquipe(dataForReporting);
        console.log("dataForReporting", dataForReporting);
      });
  }, []);

  let reportingGraph = makeReportingGraph(qhebdoEquipe);

  let messages;
  if (MessagesData) {
    messages = MessagesData.map((data, i) => {
      return <MessageManager key={i} {...data} compteur={compteur} />;
    });
  } else {
    messages = <></>;
  }

  const handleSoumettre = () => {
    fetch(`${URL_BACKEND}/messages/PlanManager/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titre: titre, message: plan }),
    }).then((response) => response.json());
    setTitre("");
    setPlan("");
  };

  return (
    <div className={styles.main}>
      <Headerblanc />
      <div className={styles.contain}>
        <Menu />
        <div className={styles.messplan}>
          <div className={styles.reportingContainer}>
            {reportingGraph}
          </div>
          <div className={styles.planContain}>
            <div className={styles.titre}>Plan d'action</div>
            <div className={styles.saisieplan}>
              <input
                type="text"
                placeholder="Titre du plan d'action"
                className={styles.inputtitre}
                onChange={(e) => setTitre(e.target.value)}
                value={titre}
              />
              <input
                type="text"
                placeholder="Plan d'action"
                className={styles.inputplan}
                onChange={(e) => setPlan(e.target.value)}
                value={plan}
              />

              <button className={styles.btn} onClick={() => handleSoumettre()}>
                Envoyer
              </button>
            </div>
          </div>
          <div className={styles.messagesContainer}>
            <div className={styles.titre}>Messages de votre équipe</div>
            {messages}
          </div>
        </div>
      </div>
      <Footerblanc />
    </div>
  );
}

export default DashboardManager;