---
sidebar_position: 5
---

# Use a mailbox

With IMAP mailbox, you can use all your mailboxes.

You can get, delete, see and unsee mails.

## Get mails

There is a code example to get mails from mailbox `INBOX` :

```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connect to IMAP server

    const mailboxPath = 'INBOX'; // Mailbox path (name)
    const mails = await imap.getAllMails(mailboxPath);

    console.log(mails); // Log an array of Mail
}

run();
```

## Delete mails

There is a code example to delete mails from mailbox `INBOX` :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>


```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

const imap = new Imap(config);
await imap.start(); // Connect to IMAP server

const mailboxPath = 'INBOX'; // Mailbox path (name)
const mails = await imap.getAllMails(mailboxPath);
    
await imap.deleteMails(mailboxPath, { mails });
```

  </TabItem>
  <TabItem value="orange" label="CJS">


```js
const Imap = require('imap-mailbox');
const { config } = require('./imap-config'); // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connect to IMAP server

    const mailboxPath = 'INBOX'; // Mailbox path (name)
    const mails = await imap.getAllMails(mailboxPath);
    
    await imap.deleteMails(mailboxPath, { mails });
}

run();
```

  </TabItem>
</Tabs>

Now that you can manage a mailbox, we can continue to watching inboxes in the next step.