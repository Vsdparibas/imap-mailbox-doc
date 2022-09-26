---
sidebar_position: 3
---

# Configuration

To configure IMAP mailbox, you need to create an [`ImapConfig`](/imap-mailbox-doc/docs/documentation/imap-config) object in a file or a variable.

This is a configuration example, named here `imap-config.js`.

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

For more options, check the [`ImapConfig`](/imap-mailbox-doc/docs/documentation/imap-config) documentation.

Parameters `host`, `port`, `auth`, `user` and `pass` are needed.

The `logger` parameter set to false disable logging from imapflow, which IMAP mailbox is based on (verbose logging).

The `logging` parameter set to true enable IMAP mailbox logging.

:::info
For typescript, you can import [`ImapConfig`](/imap-mailbox-doc/docs/documentation/imap-config) interface with :
```js
import { ImapConfig } from 'imap-mailbox';
```
:::

You can finally use IMAP mailbox. We will see how in the next step.