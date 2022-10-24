import Article from "./Article";
import { useEffect, useState } from "react";
import styles from "../styles/Dashboard.module.css";

const url = "http://localhost:3000";

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

  let theme = "stress";

  const [articlesData, setArticlesData] = useState([]);

  // Display des articles à l'initialisation, selon le thème qui est ressorti à l'issue du questionnaire

  useEffect(() => {
    fetch(`${url}/articles/${theme}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticlesData(data.articles);
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  return (
    <div>
      <h2>Votre plan d'action personnalisé</h2>
      <div className={styles.articlesContainer}>{articles}</div>
    </div>
  );
}

export default Dashboard;
