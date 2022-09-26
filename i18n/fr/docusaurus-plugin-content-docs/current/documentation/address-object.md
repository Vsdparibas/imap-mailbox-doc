---
sidebar_position: 10
---

# AddressObject

## AddressObject

### Paramètres

| Nom | Type | Description |
| --- | --- | --- |
| value | [`EmailAddress[]`](#email-address) | Un tableau avec les détails de l'adresse |
| html | `string` | Une adresse formatée en HTML |
| text | `string` | Une adresse formatée en clair |

<a name="email-address"></a>

## EmailAddress

### Paramètres

| Nom | Type | Attributs | Description |
| --- | --- | --- | --- |
| address | `string` / `undefined` | &lt;optional&gt; | L'adresse mail |
| name | `string` | | La partie nom de l'e-mail/du groupe |
| group | [`EmailAddress[]`](#email-address) / `undefined` | &lt;optional&gt; | Une adresse formatée en clair |