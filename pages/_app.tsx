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
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Coderinblack portfolio, personal website"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="coderinblack, software, coding, react, vue, nextjs, typescript, contestpug"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="antialiased">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
