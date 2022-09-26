---
sidebar_position: 2
---

# Mail

<a name="Mail"></a>

A mail from mailbox

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| uid | <code>number</code> | Mail's unique id |
| seq | <code>number</code> | Mail's sequence number |
| subject | <code>string</code> | Mail's subject |
| from | <code>AddressObject</code> \| <code>undefined</code> | Mail's from informations |
| content | <code>string</code> | Mail's content |
| mailboxPath | <code>string</code> | Mail's mailbox name |
| parsedMail | <code>ParsedMail</code> | mailparser parsed mail |


* [Mail](#Mail)
    * [.delete()](#Mail+delete)
    * [.see()](#Mail+see)
    * [.unsee()](#Mail+unsee)

<a name="Mail+delete"></a>

### mail.delete()
Delete this mail

**Kind**: instance method of [<code>Mail</code>](#Mail)  
<a name="Mail+see"></a>

### mail.see()
Mark see this mail

**Kind**: instance method of [<code>Mail</code>](#Mail)  
<a name="Mail+unsee"></a>

### mail.unsee()
Mark unsee this mail

**Kind**: instance method of [<code>Mail</code>](#Mail)  
