import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Headervert';
import Footer from '../components/Footervert';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QVT</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
