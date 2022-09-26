---
sidebar_position: 6
---

# ImapFlowTls

## Properties

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| rejectUnauthorized | `boolean` | &lt;optional&gt; | true | If `false` then client accepts self-signed and expired certificates from the server |
| minVersion | `string` | &lt;optional&gt; | TLSv1 | To improvde security you might need to use something newer, eg `TLSv1.2` |
| minDHSize | `number` | &lt;optional&gt; | 1024 | Minimum size of the DH parameter in bits to accept a TLS connection |