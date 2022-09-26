---
sidebar_position: 6
---

# ImapFlowOptions

## Properties

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| host | `string` | | | Hostname of the IMAP server |
| port | `number` | | | Port number of the IMAP server |
| secure | `boolean` | &lt;optional&gt; | false | Should the connection be established over TLS. If `false` then connection is upgraded to TLS using STARTTLS extension before authentication |
| auth | [`ImapFlowAuth`](/docs/documentation/imap-flow-auth) | | | Authentication options. Authentication is requested automatically during start() |
| servername | `string` | &lt;optional&gt; | | Servername for SNI (or when host is set to an IP address) |
| disableCompression | `boolean` | &lt;optional&gt; | false | If `true` then client does not try to use COMPRESS=DEFLATE extension |
| clientInfo | [`IdInfoObject`](/docs/documentation/id-info-object) | &lt;optional&gt; | | Client identification infos |
| disableAutoIdle | `boolean` | &lt;optional&gt; | false | If `true` then IDLE is not started automatically. Useful if you only need to perform specific tasks over the connection |
| tls | [`ImapFlowTls`](/docs/documentation/imap-flow-tls) | &lt;optional&gt; |  | Additional TLS options (see [Node.js TLS connect](https://nodejs.org/api/tls.html#tls_tls_connect_options_callback) for all available options) |
| logger | [`ImapFlowLogger`](/docs/documentation/imap-flow-logger) `false` | &lt;optional&gt; | | Custom logger instance or `false` |
| logRaw | `boolean` | &lt;optional&gt; | false | If `true` then log data read from and written to socket encoded in base64 |
| emitLogs | `boolean` | &lt;optional&gt; | false | If `true` then in addition of sending data to logger, ImapFlow emits 'log' events with the same data |
| verifyOnly | `boolean` | &lt;optional&gt; | false | If `true` then logs out automatically after successful authentication |
| proxy | `string` | &lt;optional&gt; | | Optional proxy URL. Supports HTTP CONNECT (`http://`, `https://`) and SOCKS (`socks://`, `socks4://`, `socks5://`) proxies |
| qresync | `boolean` | &lt;optional&gt; | false | If `true`, then enables QRESYNC support. EXPUNGE notifications will include `uid` property instead of `seq` |
| maxIdleTime | `number` | &lt;optional&gt; | | If set, then breaks and restarts IDLE every maxIdleTime ms |
| disableBinary | `boolean` | &lt;optional&gt; | false | If `true`, then ignores the BINARY extension when making FETCH and APPEND calls |
| disableAutoEnable | `boolean` | &lt;optional&gt; | | Do not enable supported extensions by default |