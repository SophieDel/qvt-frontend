import styles from "../styles/Article.module.css";

function Article(props) {
  const defaultImageSrc =
    "https://sante-pratique-paris.fr/wp-content/uploads/2020/01/ok-adobestock-487261315-peopleimages-com-burn-out-1333x1000.webp";

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.titre}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.illustrationContainer}>
          <img
            className={styles.illustration}
            src={
              props.illustration == undefined || props.illustration == ""
                ? defaultImageSrc
                : props.illustration
            }
            alt="contenu Media"
          />
        </div>
        <div className={styles.resume}>
          <p>{props.resume}</p>
        </div>
        <div className={styles.lien}>
          <a href={props.lien} target="_blank" rel="noopener noreferrer">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;