import '../styles/globals.css';
import "@picocss/pico";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Show Room</title>
        <meta name="description" content="A place to share makerspace activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <a className="no-margin no-decor" href="/">Show Room</a>
        <ul>
          <li>
            <a href="/upload">Upload</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
