import Translate from '@docusaurus/Translate';
import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <div className="col" style={{textAlign: 'center'}}>
              <h2><Translate>Features</Translate></h2>
              <ul>
                <li><Translate>Get mailboxes</Translate></li>
                <li><Translate>Get mails</Translate></li>
                <li><Translate>Delete mails</Translate></li>
                <li><Translate>Read/Unread mails</Translate></li>
                <li><Translate>Watch mailboxes</Translate></li>
              </ul>
            </div>
            <div className="col" style={{textAlign: 'center'}}>
              <h2><Translate>Quick start</Translate></h2>
              <Translate>Just follow the tutorial, it's easy and quick.</Translate>
              <br /><br />
            </div>
        </div>
        <div className="row">
            <div className="col" style={{textAlign: 'center'}}>
              <br /><br />
              <Translate>This project is based on imapflow.</Translate>
            </div>
          </div>
      </div>
    </section>
  );
}
