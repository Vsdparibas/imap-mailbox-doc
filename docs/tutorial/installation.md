---
sidebar_position: 2
---

# Installation

To use IMAP mailbox, you need to install the library :

```bash npm2yarn
npm install imap-mailbox
```

To import IMAP mailbox in your project :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>

```js
import Imap from 'imap-mailbox';
```

  </TabItem>
  <TabItem value="orange" label="CJS">

```js
const Imap = require('imap-mailbox').default;
```

  </TabItem>
</Tabs>

In the next part, we will see how to configure the mailbox.