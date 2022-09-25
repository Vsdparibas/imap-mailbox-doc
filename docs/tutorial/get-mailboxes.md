---
sidebar_position: 4
---

# Get mailboxes

In order to deal with mails and mailboxes, you need to get mailboxes names (path).

If you know them (like `INBOX`, `Sent`, `Trash`, ...), you don't need to get mailboxes and can skip this step.

## Getting mailboxes

You can get mailboxes simply with this code :

```js
import Imap from 'imap-mailbox';
import { config } from './imap-config'; // ImapConfig

async function run() {
    const imap = new Imap(config);
    await imap.start(); // Connect to IMAP server

    const mailboxes = await imap.getMailboxes();

    console.log(mailboxes); // Log a map of Mailbox objects
}

run();
```

Variable `mailboxes` contains `Mailbox` objects, where you can use `Mailbox.path` to get a mailbox name (path).

:::danger
Always wait for `await imap.start()` before any operation on Imap object (except for `imap.on()` method).
:::

Now that you have the name of your mailboxes, you can get mails from them.

We will see that in the next step.