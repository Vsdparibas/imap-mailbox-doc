---
sidebar_position: 4
---

# ParsedMail

## Paramètres

| Nom | Type | Attributs | Description |
| --- | --- | --- | --- |
| attachments | [`Attachment[]`](/docs/documentation/attachment) | | Un tableau de pièces jointes |
| headers | `Headers` | | Une map d'objets avec les clés des headers en minuscules |
| headerLines | `HeaderLines` | | Un tableau des headers bruts |
| html | `string` / `false` | | Corps HTML du mail. Vaut `false` quand il n'y a pas de corps HTML. |
| text | `string` / `undefined` | &lt;optional&gt; | Le texte en clair du corps du mail |
| textAsHtml | `string` / `undefined` | &lt;optional&gt; | Le texte en clair du corps du mail formatté en HTML |
| subject | `string` / `undefined` | &lt;optional&gt; | Le sujet du mail |
| references | `string[]` / `string` / `undefined` | &lt;optional&gt; | Soit un tableau de un ou plusieurs ID de message référencées, soit l'ID du mail |
| date | `Date` / `undefined` | &lt;optional&gt; | Un objet Date pour le header `Date:` |
| to | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | Un objet AddressObject ou un tableau d'objets AddressObject pour le header `To:` |
| from | [`AddressObject`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | Un objet AddressObject pour le header `From:` |
| cc | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | Un objet AddressObject ou un tableau d'objets AddressObject pour le header `Cc:` |
| bcc | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | Un objet AddressObject ou un tableau d'objets AddressObject pour le header `Bcc:` |
| replyTo | [`AddressObject`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | Un object AddressObject pour le header `Reply-to:` |
| messageId | `string` / `undefined` | &lt;optional&gt; | L'id du mail |
| inReplyTo | `string` / `undefined` | &lt;optional&gt; | La valeur en chaîne de charactères pour In-Reply-To |
| priority | `'normal'` / `'low'` / `'high'` / `undefined` | &lt;optional&gt; | Priorité du mail |