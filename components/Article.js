import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Article.module.css';


function Article(props) {

const handleOpenArticle = () => {
    console.log("click")
    // window.location.replace(props.lien);
    window.open(props.lien, '_blank', 'noopener,noreferrer');
}

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.titre}</h3>
      </div>
      <div className={styles.contenu}></div>
      <div className={styles.resume}>
        <p>{props.resume}</p>
      </div>
      <div className={styles.lien}>
        <p>Si vous voulez en savoir plus cliquez ici</p>
        <FontAwesomeIcon onClick={() => handleOpenArticle()} icon={faExternalLink} transform="grow-6" className={styles.faExternalLink} />
        {/* <p>{props.lien}</p> */}
      </div>
    </div>
  );
}

export default Article;
