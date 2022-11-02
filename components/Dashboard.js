import Article from "./Article";
import { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";
import Headerblanc from "./Headerblanc";
import Footerblanc from "./Footerblanc";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import Plan from "./Plan";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const URL_BACKEND = require("../modules/url_backend");

function Dashboard() {
  // const articlesData = [
  //   {
  //     _id: "6356815b2e605772ead184a0",
  //     theme: "conditions de travail",
  //     titre:
  //       "Télétravail : comment arrêter de faire des horaires à rallonge par culpabilité ?",
  //     resume:
  //       "Travail, besogne, labeur : il a toujours rythmé la vie des hommes et des femmes. Nos ancêtres ont traversé de grandes crises économiques ou politiques, connu eux aussi les petits et grands défis d’une vie. Mais aucun d’entre eux n’a bénéficié de cette chance offerte à nombre d’entre nous aujourd’hui : pouvoir travailler depuis chez soi pour un meilleur équilibre entre vie pro et vie perso. Et pourtant, les études montrent que les personnes qui travaillent depuis chez elles ont tendance à prolonger leur journée de travail. La raison ? Une culpabilité de « déserteur⋅se » ainsi qu’un besoin de « surcompenser » l’absence physique au bureau. Oui mais attendez – si vous avez fini tout ce que vous deviez faire ou aviez prévu de faire ? Se libérer de la culpabilité, ça s’apprend ! On vous le promet, c’est possible.",
  //     illustration:
  //       "https://cdn-images.welcometothejungle.com/rPiZAwdhwra-RfzkD2xx9MqR84ekdxxvzmrMy7SXbpY/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzQzNzQvMTY1NDYxL1RyYWQtd29yay1mcm9tLWhvbWUuanBn",
  //     lien: "https://www.welcometothejungle.com/fr/articles/teletravail-culpabilite-surcompenser-horaires-bureau?q=cef7237355838334fca941ad47307cf4&o=7390",
  //   },
  //   {
  //     _id: "635682642e605772ead184a2",
  //     theme: "conditions de travail",
  //     titre: "Travailler moins pour travailler mieux : la semaine de 4 jours",
  //     resume: "Non, nous ne parlerons pas ici de rythmes scolaires mais bel et bien de la semaine de 4 jours… en entreprise. Car si cette idée peut sembler utopique ou même saugrenue dans un pays où le présentéisme est roi, cette structuration du temps de travail a pourtant déjà été expérimentée dans diverses entreprises, en France comme à l’étranger, le plus souvent avec succès. Voici un petit tour d’horizon de ces expérimentations et de leurs résultats plein de promesses.",
  //     illustration: "https://cdn-images.welcometothejungle.com/KMG7ErkJg0iqlwxC7-qKtggfpsHo7OItMf99LoBayEg/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcnRpY2xlL2ltYWdlLzgxOTkvMTU0MzkzLzQtam91cnMtcGFyLXNlbWFpbmUtd2ViLmpwZw",
  //     lien: "https://www.welcometothejungle.com/fr/articles/travailler-4-jours-par-semaine?q=cef7237355838334fca941ad47307cf4&o=1267",
  //     __v: 0
  //   },
  // ];

  // let theme = "stress";

  const [articlesData, setArticlesData] = useState([]);
  const [PlanData, setPlanData] = useState([]);
  const [Q1, setQ1] = useState(null);
  const [Q2, setQ2] = useState(null);
  const [Q3, setQ3] = useState(null);
  const [derniereSemaine, setDerniereSemaine] = useState(null);
  const [count2, setCount2] = useState("");

  //fonction compteur pour transiter les infos de puis la fille (Plan) vers la mere (dashboar)
  const compteur = (message) => {
    setCount2(message.length);
  };

  const user = useSelector((state) => state.user.value);
  const token = user.token;

  // Display des articles à l'initialisation, selon le thème qui est ressorti à l'issue du questionnaire

  useEffect(() => {
    // Display des articles aossiciés s'il y a un profil
    if (user.profil) {
      fetch(`${URL_BACKEND}/articles/${user.profil}`)
        .then((response) => response.json())
        .then((data) => {
          setArticlesData(data.articles);
        });
    } else {
      // S'il n'y a pas de profil on affiche tous les articles
      fetch(`${URL_BACKEND}/articles/`)
        .then((response) => response.json())
        .then((data) => {
          setArticlesData(data.articles);
        });
    }
  }, []);

  const articles = articlesData.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  // import des plans actifs à l'initialisation, et mise à jour apres le choix du manager

  useEffect(() => {
    fetch(`${URL_BACKEND}/messages/PlanEquipe/${user.equipe}`)
      .then((response) => response.json())
      .then((data) => {
        compteur(data.data);
        console.log("les plans:", data);
        setPlanData(data.data);
        console.log("count2", count2);
      });
  }, [count2]);

  let plans;
  if (PlanData) {
    plans = PlanData.map((data, i) => {
      return <Plan key={i} {...data} compteur={compteur} />;
    });
  } else {
    plans = <></>;
  }

  //Le mood de la semaine
  if (user.token) {
    useEffect(() => {
      fetch(`${URL_BACKEND}/users/Qsemaine/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          if ([data.data.length] > 0) {
            console.log("le mood:", data.data[data.data.length - 1]);
            setQ1(data.data[data.data.length - 1].Q1);
            setQ2(data.data[data.data.length - 1].Q2);
            setQ3(data.data[data.data.length - 1].Q3);
            setDerniereSemaine(data.data[data.data.length - 1].semaine);
          } else {
          }
          //   setCount(count+1)
        });
    }, []);
  }

  // let planSection;
  // if (derniereSemaine===semaine) {
  //   qhebdoSection = (
  //     <Button href = "/qhebdosaisi" className={styles.liens}> Quiz de la semaine</Button>
  //   )}else {
  //     qhebdoSection = (
  //     <Button href = "/qhebdo" className={styles.liens}> Quiz de la semaine</Button>
  //     )
  //   };

  function starsIconsDependingMark(mark) {
    let starsArray = [];
    for (let i=1; i <= 10; i++){
      starsArray.push(<FontAwesomeIcon key={i} icon={faStar} style={mark >= i ? {} : {'color': '#79AEA3'}} className={styles.icon} />)
    }
return starsArray
  }


  return (
    <div className={styles.main}>
      <Headerblanc />
      <div className={styles.contain}>
        <Menu />
        <div className={styles.contenu}>
          <h2 className={styles.h2}>
            Votre mood de la semaine {derniereSemaine}
          </h2>
          <div className={styles.mood}>
            <div className={styles.moodSection}>
              <div>Votre niveau de stress: </div>
              <div className={styles.moodStars}>
                {starsIconsDependingMark(Q1)}
                {/* {Q1}/10 */}
                </div>
            </div>
            <div className={styles.moodSection}>
              <div>Confiance en votre manager: </div>
              <div className={styles.moodStars}>
                {starsIconsDependingMark(Q2)}
                {/* {Q2}/10 */}
                </div>
            </div>
            <div className={styles.moodSection}>
              <div>Votre niveau de motivation: </div>
              <div className={styles.moodStars}>{starsIconsDependingMark(Q3)}</div>
            </div>
          </div>
          <h2 className={styles.h2}>Votre plan d'action personnalisé</h2>
          <div className={styles.articlesContainer}>{articles}</div>

          <h2 className={styles.h2}>
            Les Plans de votre équipe en cours sont:
          </h2>
          <div className={styles.planContainer}>{plans}</div>
        </div>
      </div>
      <Footerblanc />
    </div>
  );
}

export default Dashboard;
