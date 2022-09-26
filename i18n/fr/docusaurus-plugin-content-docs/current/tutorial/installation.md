---
sidebar_position: 2
---

# Installation

Pour utiliser IMAP mailbox, tu dois installer la librairie :

```bash npm2yarn
npm install imap-mailbox
```

Pour importer IMAP mailbox dans ton projet :

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

Dans la partie suivante, nous allons voir comment configurer la boîte mail.