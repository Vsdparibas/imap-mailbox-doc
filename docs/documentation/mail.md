---
sidebar_position: 2
---

# Mail

## Properties

| Name | Type | Description |
| --- | --- | --- |
| uid | `number` | Unique id of mail |
| seq | `number` | Interval in ms to reconnect IMAP account when fails |
| subject | `string` | Subject of the mail |
| from | [`AddressObject`](/docs/documentation/address-object) or `undefined` | Mail from informations |
| content | `string` | Content of the mail |
| mailboxPath | `string` | Mailbox name |
| parsedMail | [`ParsedMail`](/docs/documentation/parsed-mail) | mailparser parsed mail |