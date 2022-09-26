---
sidebar_position: 6
---

# ImapFlowOptions

## Propriétés

| Nom | Type | Attributs | Défaut | Description |
| --- | --- | --- | --- | --- |
| host | `string` | | | Nom d'hôte du serveur IMAP |
| port | `number` | | | Numéro de port du serveur IMAP |
| secure | `boolean` | &lt;optional&gt; | false | La connexion doit-elle être établie via TLS. Si `false`, la connexion est mise à niveau vers TLS à l'aide de l'extension STARTTLS avant l'authentification |
| auth | [`ImapFlowAuth`](/docs/documentation/imap-flow-auth) | | | Informations d'authentification. L'authentification est demandée automatiquement lors de start() |
| servername | `string` | &lt;optional&gt; | | Nom du serveur pour SNI (ou lorsque l'hôte est défini sur une adresse IP) |
| disableCompression | `boolean` | &lt;optional&gt; | false | Si `true` alors le client n'essaie pas d'utiliser l'extension COMPRESS=DEFLATE |
| clientInfo | [`IdInfoObject`](/docs/documentation/id-info-object) | &lt;optional&gt; | | Informations d'identification du client |
| disableAutoIdle | `boolean` | &lt;optional&gt; | false | Si `true` alors IDLE n'est pas démarré automatiquement. Utile si vous avez seulement besoin d'effectuer des tâches spécifiques via la connexion |
| tls | [`ImapFlowTls`](/docs/documentation/imap-flow-tls) | &lt;optional&gt; | | Options TLS supplémentaires (voir [Node.js TLS connect](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback) pour toutes les options disponibles) |
| logger | [`ImapFlowLogger`](/docs/documentation/imap-flow-logger) `false` | &lt;optional&gt; | | Instance de logs personnalisé ou `false` |
| logRaw | `boolean` | &lt;optional&gt; | false | Si `true` alors log les données lues et écrites dans le socket encodé en base64 |
| emitLogs | `boolean` | &lt;optional&gt; | false | Si `true` alors en plus d'envoyer des données to logger, ImapFlow émet des événements 'log' avec les mêmes données |
| verifyOnly | `boolean` | &lt;optional&gt; | false | Si `true` alors se déconnecte automatiquement après une authentification réussie |
| proxy | `string` | &lt;optional&gt; | | URL proxy facultative. Prend en charge les proxys HTTP CONNECT (`http://`, `https://`) et SOCKS (`socks://`, `socks4://`, `socks5://`) |
| qresync | `boolean` | &lt;optional&gt; | false | Si `true`, active la prise en charge de QRESYNC. Les notifications EXPUNGE incluront la propriété `uid` au lieu de `seq` |
| maxIdleTime | `number` | &lt;optional&gt; | | S'il est défini, interrompt et redémarre IDLE chaque maxIdleTime ms |
| disableBinary | `boolean` | &lt;optional&gt; | false | Si `true`, ignore l'extension BINARY lors des appels FETCH et APPEND |
| disableAutoEnable | `boolean` | &lt;optional&gt; | | Ne pas activer les extensions prises en charge par défaut |