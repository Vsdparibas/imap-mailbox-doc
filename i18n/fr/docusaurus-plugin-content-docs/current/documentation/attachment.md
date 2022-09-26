---
sidebar_position: 11
---

# Attachment

## Attachment

### Paramètres

L'interface `Attachment` étends de l'interface [`AttachmentCommon`](#attachment-common)

| Nom | Type | Description |
| --- | --- | --- |
| content | [`Buffer`](https://nodejs.org/api/buffer.html) | Un Buffer qui contient le contenu de la pièce jointe |
| related | `boolean` | Si `true`, cette pièce jointe ne doit pas être proposée au téléchargement |

<a name="attachment-common"></a>

## AttachmentCommon

### Paramètres

| Nom | Type | Attributs | Description |
| --- | --- | --- | --- |
| type | `'attachment'` | | Type du message |
| content | `any` | | Contenu de la pièce jointe |
| contentType | `string` | | Type MIME du message |
| contentDisposition | `string` | | Type de disposition du contenu pour la pièce jointe |
| filename | `string` / `undefined` | &lt;optional&gt; | Nom de fichier de la pièce jointe |
| headers | `Headers` | | Une Map qui contient les en-têtes MIME pour le nœud de pièce jointe |
| headerLines | `HeaderLines` | | Un tableau de headers brutes pour le nœud de pièce jointe |
| checksum | `string` | | Un hachage MD5 du contenu du message |
| size | `number` | | Taille du message en octets |
| contentId | `string` / `undefined` | &lt;optional&gt; | La valeur d'en-tête de `Content-ID` |
| cid | `string` / `undefined` | &lt;optional&gt; | `contentId` sans `<` et `>` |
| related | `boolean` / `undefined` | &lt;optional&gt; | Si `true`, cette pièce jointe ne doit pas être proposée au téléchargement |