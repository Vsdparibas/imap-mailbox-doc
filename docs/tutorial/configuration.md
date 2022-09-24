---
step_position: 2
---

# Configuration

To configure IMAP mailbox, you need to create a [`ImapConfig`](/api#imapconfig) object in a file.

You can name this file as you wish.

This is a configuration example, named here `imap-config.js`.

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
// For CommonJS, replace "export config;" by :
// module.exports = { config };
```
For more options, check the `ImapConfig` documentation.

Parameters `host`, `port`, `auth`, `user` and `pass` are needed.

The `logger` parameter set to false disable imapflow (verbose logging), which IMAP mailbox is based on.

The `logging` parameter set to true enable IMAP mailbox logging.

:::info
For typescript, you can import `ImapConfig` interface with :
```js
import { ImapConfig } from 'imap-mailbox';
```
:::


You can finally use IMAP mailbox. We will see how in the next step.