import Head from 'next/head';
import '../styles/index.css';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

const App = ({ Component, pageProps }) => {
  return (
    <div className="antialiased box-border">
      <Head>
        <title>Coderinblack</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
