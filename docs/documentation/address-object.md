---
sidebar_position: 10
---

# AddressObject

## AddressObject

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| value | [`EmailAddress[]`](#email-address) | An array with address details |
| html | `string` | A formatted address string for HTML context |
| test | `string` | A formatted address string for plaintext context |

<a name="email-address"></a>

## EmailAddress

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| address | `string` / `undefined` | &lt;optional&gt; | The email address |
| name | `string` | | The name part of the email/group |
| group | [`EmailAddress[]`](#email-address) / `undefined` | &lt;optional&gt; | A formatted address string for plaintext context |