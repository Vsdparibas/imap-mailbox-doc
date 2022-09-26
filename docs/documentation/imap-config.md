---
sidebar_position: 5
---

# ImapConfig

ImapConfig extends [`ImapFlowOptions`](/docs/documentation/imap-flow-options) interface.

## Properties

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| logging | <code>boolean</code> | &lt;option&gt; | false | Enable IMAP mailbox logging when true |
| reconnectInterval | <code>number</code> | &lt;option&gt; | 60000 | Interval in ms to reconnect IMAP account when fails |
| mailboxesToWatch | <code>string[]</code> | &lt;option&gt; | [] | Array of mailboxes to watch |
| mailboxesWatchInterval | <code>number</code> | &lt;option&gt; | 60000 | Interval in ms to watch mailboxes |