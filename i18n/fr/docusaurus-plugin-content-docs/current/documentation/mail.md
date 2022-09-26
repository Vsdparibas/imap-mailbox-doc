---
sidebar_position: 2
---

# Mail

<a name="Mail"></a>

Un mail depuis une boîte mail

**Type**: classe globale

**Propriétés**

| Nom | Type | Description |
| --- | --- | --- |
| uid | <code>number</code> | ID unique du mail |
| seq | <code>number</code> | Nombre de séquence du mail |
| subject | <code>string</code> | Sujet du mail |
| from | <code>AddressObject</code> \| <code>undefined</code> | Informations de l'expéditeur du mail |
| content | <code>string</code> | Contenu du mail |
| mailboxPath | <code>string</code> | Nom de la boîte mail du mail |
| parsedMail | <code>ParsedMail</code> | mailparser parsed mail |


* [Mail](#Mail)
    * [.delete()](#Mail+delete)
    * [.see()](#Mail+see)
    * [.unsee()](#Mail+unsee)

<a name="Mail+delete"></a>

### mail.delete()
Supprimer ce mail

**Type**: méthode d'instance de [<code>Mail</code>](#Mail)  
<a name="Mail+see"></a>

### mail.see()
Marquer ce mail comme vu

**Type**: méthode d'instance de [<code>Mail</code>](#Mail)  
<a name="Mail+unsee"></a>

### mail.unsee()
Marquer ce mail comme non vu

**Type**: méthode d'instance de [<code>Mail</code>](#Mail)  
