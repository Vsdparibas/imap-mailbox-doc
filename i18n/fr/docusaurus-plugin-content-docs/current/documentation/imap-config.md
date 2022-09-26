---
sidebar_position: 5
---

# ImapConfig

ImapConfig étend de l'interface [`ImapFlowOptions`](/docs/documentation/imap-flow-options).

## Propriétés

| Nom | Type | Attributs | Défaut | Description |
| --- | --- | --- | --- | --- |
| logging | <code>boolean</code> | &lt;option&gt; | false | Active les logs d'IMAP mailbox quand sur `true` |
| reconnectInterval | <code>number</code> | &lt;option&gt; | 60000 | Intervale en ms pour se reconnecter au serveur IMAP quand déconnecté |
| mailboxesToWatch | <code>string[]</code> | &lt;option&gt; | [] | Tableau de boîtes mail à surveiller |
| mailboxesWatchInterval | <code>number</code> | &lt;option&gt; | 60000 | Intervale en ms pour surveiller les boîtes mail |