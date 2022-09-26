---
sidebar_position: 3
---

# Configuration

Pour configurer IMAP mailbox, tu dois créer un objet dans un fichier ou une variable, basé sur l'objet [`ImapConfig`](/docs/documentation/imap-config).

Voici un exemple de configuration, appelé ici `imap-config.js`.

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
}

module.exports = { config };
```

  </TabItem>
</Tabs>

Pour plus d'options, regarde la documentation de [`ImapConfig`](/docs/documentation/imap-config).

Les paramètres `host`, `port`, `auth`, `user` et `pass` sont obligatoires.

Le paramètre `logger` à false, permets de désactiver les logs de imapflow, sur lequel IMAP mailbox est basé (verbose logs).

Le paramètre `logging` à true, permets d'activer les logs d'IMAP mailbox.

:::info
Pour typescript, tu peux importer l'interface [`ImapConfig`](/docs/documentation/imap-config) avec :

```js
import { ImapConfig } from 'imap-mailbox';
```
:::

Tu peux maintenant utiliser IMAP mailbox. Nous allons voir comment à l'étape suivante.