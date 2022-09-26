---
sidebar_position: 4
---

# Récupérer des boîtes mail

Pour pouvoir utiliser les mails et les boîtes mail, tu dois connaître le nom des boîtes mail.

Si tu les connais (comme `INBOX`, `Sent`, `Trash`, ...), tu peux passer à l'étape suivante.

## Récupérer les boîtes mail

Tu peux simplement récupérer les boîtes mail avec ce code :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>

```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

const imap = new Imap(config);
await imap.start(); // Connexion au serveur IMAP

const mailboxes = await imap.getMailboxes();

console.log(mailboxes); // Log une map d'objets Mailbox
```

  </TabItem>
  <TabItem value="orange" label="CJS">

```js
const Imap = require('imap-mailbox').default;
const { config } = require('./imap-config'); // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connexion au serveur IMAP

    const mailboxes = await imap.getMailboxes();

    console.log(mailboxes); // Log une map d'objets Mailbox
}

run();
```

  </TabItem>
</Tabs>

La variable `mailboxes` contiens une map de [`Mailbox`](/docs/documentation/mailbox), sur lesquelles tu peux utiliser `Mailbox.path` pour récupérer le nom de la boîte mail.

:::danger
Toujours attendre `await imap.start()` avant de faire quelconque opération sur l'objet Imap (sauf pour la méthode `imap.on()`).
:::

Maintenant que tu as le nom des boîtes mail, tu peux récupérer les mails à l'intérieur.

Ce que l'on va voir dans l'étape suivante.