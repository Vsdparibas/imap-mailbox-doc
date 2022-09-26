---
sidebar_position: 11
---

# Attachment

## Attachment

### Parameters

Interface `Attachment` extends interface [`AttachmentCommon`](#attachment-common)

| Name | Type | Description |
| --- | --- | --- |
| content | [`Buffer`](https://nodejs.org/api/buffer.html) | A Buffer that contains the attachment contents |
| related | `boolean` | If `true` then this attachment should not be offered for download |

<a name="attachment-common"></a>

## AttachmentCommon

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| type | `'attachment'` | | Message type |
| content | `any` | | Attachment contents |
| contentType | `string` | | MIME type of the message |
| contentDisposition | `string` | | Content disposition type for the attachment |
| filename | `string` / `undefined` | &lt;optional&gt; | File name of the attachment |
| headers | `Headers` | | A Map value that holds MIME headers for the attachment node |
| headerLines | `HeaderLines` | | An array of raw header lines for the attachment node |
| checksum | `string` | | A MD5 hash of the message content |
| size | `number` | | Message size in bytes |
| contentId | `string` / `undefined` | &lt;optional&gt; | The header value from `Content-ID` |
| cid | `string` / `undefined` | &lt;optional&gt; | `contentId` without `<` and `>` |
| related | `boolean` / `undefined` | &lt;optional&gt; | If `true` then this attachment should not be offered for download |