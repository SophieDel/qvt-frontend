import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <div>
      <Link href = "/dashboard"> go to dashboard</Link> 
      </div>
      <div>
      <Link href = "/questionnaire"> go to questionnaire</Link> 
      </div>
    </div>
  );
}

export default Home;
