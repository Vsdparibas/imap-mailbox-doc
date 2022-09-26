---
sidebar_position: 5
---

# Utiliser une boîte mail

Avec IMAP mailbox, tu peux utiliser toutes tes boîtes mail.

Tu peux récupérer, supprimer, marquer lu/non lu des mails.

## Récupérer des mails

Voici un exemple de code permettant de récupérer les mails depuis la boîte mail `INBOX` :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>

```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

const imap = new Imap(config);
await imap.start(); // Connexion au serveur IMAP

const mailboxPath = 'INBOX'; // Mailbox path (nom)
const mails = await imap.getAllMails(mailboxPath);

console.log(mails); // Log un tableau de Mail
```

  </TabItem>
  <TabItem value="orange" label="CJS">

```js
const Imap = require('imap-mailbox').default;
const { config } = require('./imap-config'); // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connexion au serveur IMAP

    const mailboxPath = 'INBOX'; // Mailbox path (nom)
    const mails = await imap.getAllMails(mailboxPath);

    console.log(mails); // Log un tableau de Mail
}

run();
```

  </TabItem>
</Tabs>

## Supprimer des mails

Voici un exemple de code permettant de supprimer des mails depuis la boîte mail `INBOX` :

<Tabs>
  <TabItem value="apple" label="ESM" default>


```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

const imap = new Imap(config);
await imap.start(); // Connexion au serveur IMAP

const mailboxPath = 'INBOX'; // Mailbox path (nom)
const mails = await imap.getAllMails(mailboxPath);
    
await imap.deleteMails(mailboxPath, { mails });
```

  </TabItem>
  <TabItem value="orange" label="CJS">


```js
const Imap = require('imap-mailbox').default;
const { config } = require('./imap-config'); // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connexion au serveur IMAP

    const mailboxPath = 'INBOX'; // Mailbox path (nom)
    const mails = await imap.getAllMails(mailboxPath);
    
    await imap.deleteMails(mailboxPath, { mails });
}

run();
```

  </TabItem>
</Tabs>

Tu peux maintenant utilier une boîte mail.

Nous allons continuer avec la surveillance de boîtes mail à l'étape suivante.