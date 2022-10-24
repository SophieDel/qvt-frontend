import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Article.module.css";
import Image from "next/image";
import Link from "next/link";

function Article(props) {
  const handleOpenArticle = () => {
    console.log("click");
    // window.location.replace(props.lien);
    window.open(props.lien, "_blank", "noopener,noreferrer");
  };
  
  console.log(props.lien)

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.titre}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          {/* <Image src={props.illustration} width={"20%"} height={"20%"} alt="contenu Media"></Image> */}
          <img
            src={props.illustration}
            width={"30%"}
            height={"40%"}
            alt="contenu Media"
          />
        </div>
        <div className={styles.resume}>
          <p>{props.resume}</p>
        </div>
        <div className={styles.lien}>
            
          {/* <Link to={{ pathname: props.lien }} target="_blank">En savoir plus</Link> */}
          {/* <FontAwesomeIcon
            onClick={() => handleOpenArticle()}
            icon={faExternalLink}
            transform="grow-6"
            className={styles.faExternalLink}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Article;
