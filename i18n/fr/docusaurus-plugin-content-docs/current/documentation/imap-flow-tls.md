---
sidebar_position: 6
---

# ImapFlowTls

## Propriétés

| Nom | Type | Attributs | Défaut | Description |
| --- | --- | --- | --- | --- |
| rejectUnauthorized | `boolean` | &lt;optional&gt; | true | Si `false`, le client accepte les certificats auto-signés et expirés du serveur |
| minVersion | `string` | &lt;optional&gt; | TLSv1 | Pour améliorer la sécurité, vous devrez peut-être utiliser quelque chose de plus récent, par exemple `TLSv1.2` |
| minDHSize | `number` | &lt;optional&gt; | 1024 | Taille minimale du paramètre DH en bits pour accepter une connexion TLS |