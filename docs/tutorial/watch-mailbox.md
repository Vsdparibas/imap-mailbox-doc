---
sidebar_position: 6
---

# Watch a mailbox

You can watch your mailboxes, simply with a little bit of configuration.

## Configure watching

To watch a mailbox, you need to tell to IMAP mailbox what mailbox to watch.

This is done in the configuration of IMAP mailbox.

Here is an exemple of a configuration with watching :

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

`mailboxesToWatch` contains an array of all the mailboxes name's to watch (case sensistive).

`mailboxesToWatchInterval` is the checking new mails interval in ms.

## New mails listener

Now that you have configured watching, you can use event listeners of `Imap` object.

There is an exemple of listening `INBOX` new mails :

<Tabs>
  <TabItem value="apple" label="ESM" default>


```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

function onNewMail(mail) {
    console.log('I received a mail !');
}

const imap = new Imap(config);
imap.on('newMail', onNewMail); // Link onNewMail function to newMail event listener
await imap.start(); // Connect to IMAP server after setting listeners
```

  </TabItem>
  <TabItem value="orange" label="CJS">


```js
const Imap = require('imap-mailbox');
const { config } = require('./imap-config'); // ImapConfig

function onNewMail(mail) {
    console.log('I received a mail !');
}

async function run() {
    const imap = new Imap(config);
    imap.on('newMail', onNewMail); // Link onNewMail function to newMail event listener
    await imap.start(); // Connect to IMAP server after setting listeners
}

run();
```

  </TabItem>
</Tabs>

Every time that a new mail is detected, `onNewMail` function will be triggered.