---
sidebar_position: 6
---

# Surveiller une boîte mail

Tu peux surveiller tes boîtes mail, simplement avec un peu de configuration.

## Configurer la surveillance

Pour surveiller une boîte mail, tu dois en informer IMAP mailbox.

Pour ce faire, il suffit de le renseigner dans la configuration d'IMAP mailbox.

Voici un example de configuration avec surveillance :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>


```js title="/imap-config.js"
const config = {
    host: 'imap.server.domain',
    port: 993,
    auth: {
        user: 'username@server.domain',
        pass: 'password',
    }
    logger: false,
    logging: true,
    mailboxesToWatch: ['INBOX'],
    mailboxesToWatchInterval: 1000 * 60,
}

export config;
```

  </TabItem>
  <TabItem value="orange" label="CJS">


```js title="/imap-config.js"
const config = {
    host: 'imap.server.domain',
    port: 993,
    auth: {
        user: 'username@server.domain',
        pass: 'password',
    }
    logger: false,
    logging: true,
    mailboxesToWatch: ['INBOX'],
    mailboxesToWatchInterval: 1000 * 60,
}

module.exports = { config };
```

  </TabItem>
</Tabs>

`mailboxesToWatch` contient un tableau de nom de boîtes mail à surveiller (sensible à la casse).

`mailboxesToWatchInterval` est l'interval de surveillance des boîtes mail.

## Listener de nouveaux mails

Maintenant que tu as configuré la surveillance, tu peux utiliser l'écouteur d'évènements de l'objet [`Imap`](/docs/documentation/imap).

Voici un example d'écoute des nouveaux mails :

<Tabs>
  <TabItem value="apple" label="ESM" default>


```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

function onNewMail(mail) {
    console.log("J'ai reçu un mail !");
}

const imap = new Imap(config);
imap.on('newMail', onNewMail); // Lier la fonction onNewMail à l'évènement newMail
await imap.start(); // Connexion au server IMAP après la liaison de l'event listener
```

  </TabItem>
  <TabItem value="orange" label="CJS">


```js
const Imap = require('imap-mailbox').default;
const { config } = require('./imap-config'); // ImapConfig

function onNewMail(mail) {
    console.log("J'ai reçu un mail !");
}

async function run() {
    const imap = new Imap(config);
    imap.on('newMail', onNewMail); // Lier la fonction onNewMail à l'évènement newMail
    await imap.start(); // Connexion au server IMAP après la liaison de l'event listener
}

run();
```

  </TabItem>
</Tabs>

A chaque fois qu'un nouveau mail est détécté (dans les boîtes mails renseignées dans la configuration), la fonction `onNewMail` sera déclanchée.