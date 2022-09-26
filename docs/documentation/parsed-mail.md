---
sidebar_position: 4
---

# ParsedMail

## Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| attachments | [`Attachment[]`](/docs/documentation/attachment) | | An array of attachment |
| headers | `Headers` | | A Map object with lowercase header keys |
| headerLines | `HeaderLines` | | An array of raw header lines |
| html | `string` / `false` | | The HTML body of the message. Sets to `false` when there is no HTML body |
| text | `string` / `undefined` | &lt;optional&gt; | The plaintext body of the message |
| textAsHtml | `string` / `undefined` | &lt;optional&gt; | The plaintext body of the message formatted as HTML |
| subject | `string` / `undefined` | &lt;optional&gt; | The subject line |
| references | `string[]` / `string` / `undefined` | &lt;optional&gt; | Either an array of two or more referenced Message-ID values or a single Message-ID value |
| date | `Date` / `undefined` | &lt;optional&gt; | A Date object for the `Date:` header |
| to | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | An address object or array of address objects for the `To:` header |
| from | [`AddressObject`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | An address object for the `From:` header |
| cc | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | An address object or array of address objects for the `Cc:` header |
| bcc | [`AddressObject`](/docs/documentation/address-object) / [`AddressObject[]`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | An address object or array of address objects for the `Bcc:` header |
| replyTo | [`AddressObject`](/docs/documentation/address-object) / `undefined` | &lt;optional&gt; | An address object for the `Reply-To:` header |
| messageId | `string` / `undefined` | &lt;optional&gt; | The Message-ID value string |
| inReplyTo | `string` / `undefined` | &lt;optional&gt; | The In-Reply-To value string |
| priority | `'normal'` / `'low'` / `'high'` / `undefined` | &lt;optional&gt; | Priority of the e-mail |