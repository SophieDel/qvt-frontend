import styles from '../styles/Header.module.css';

function Header() {
return (
    <div>
    <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
    </main>
    </div>
);
}

export default Header;
