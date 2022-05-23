import '../styles/globals.css';
import "@picocss/pico";
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Show Room</title>
        <meta name="description" content="A place to share makerspace activities" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link className="no-margin no-decor" href="/">
          <h1 className='no-margin' style={{ cursor: 'pointer' }}>Show Room</h1>
        </Link>
        <ul>
          <li>
            <Link href="/upload"><span style={{ cursor: 'pointer' }}>Upload</span></Link>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
