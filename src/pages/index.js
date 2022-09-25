import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const btnClassname = `button button--secondary button--lg ${styles.button}`
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate>Simple NodeJS IMAP mailbox library</Translate></p>
        <div className={styles.buttons}>
          <Link
            className={btnClassname}
            to="/docs/tutorial/installation">
            <Translate>Installation</Translate>
          </Link>
          <Link
            className={btnClassname}
            to="/docs/tutorial/installation">
            <Translate>Documentation</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({
        message: "Home",
        description: "Home tab title"
      })}
      description={translate({
        message: "Simple NodeJS IMAP mailbox library",
        description: "HTML meta description tag"
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
