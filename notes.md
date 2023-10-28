# notes :

## urls :

https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/#post-body

`app name` :

`access token` : EAAESktZCZC1FgBO3ZAQI6QlQe5ECQwZCqyL9J9OBS2ntRnahPoboYNsq1Mc1orLBskIok2ubzLfyKpCkp9rZAfZAMi0dAEmnx7a0LoeIrHDbBnCW6wlCFvMv19ShGiwprvU4ioET7tEF4DDMpVZCN4rBEk8CYLcM3BBZCZAUSTXCycqYF0B2Au4GTZCFlZCOoRgnw7Y

`Phone number ID`: 165745039945964
`WhatsApp Business Account ID`: 157833617409336
`to` : 212777040357

## TEMPLATES :

> read : [TEMPLATE DOCS](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/#cr-ation-de-mod-les)

> cetegories : AUTHENTICATION, MARKETING, UTILITY
> :warnin: AUTHENTICATION :
> uses a special body difrent then the other categories
> https://developers.facebook.com/docs/whatsapp/business-management-api/authentication-templates/copy-code-button-authentication-templates

### REQ BODY :

> POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates HTTP/1.1

```json
{
  "name": "<NAME>",
  "category": "<CATEGORY>",
  "allow_category_change": <ALLOW_CATEGORY_CHANGE>, // optional
  "language": "<LANGUAGE>",
  "components": [<COMPONENTS>]
}
```

### COMPONENTS :

> read : [Rules for message templates](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines)

the components are the parts of the message template
its a list of objects with the following structure :

```json
{
  "type": "<TYPE>",
  "text": "<TEXT>",
  "parameters": [<PARAMETERS>]
}
```

> type : HEADER, BODY, FOOTER

#### Text Headers :

```json
{
  "type": "HEADER",
  "format": "TEXT",
  "text": "<TEXT>",

  # Required if <TEXT> string contains variables
  "example": {
    "header_text": [
      "<HEADER_TEXT>"
    ]
  }
}
```

### Media Headers

```json
{
  "type": "HEADER",
  "format": "<FORMAT>", // ndicates media asset type. Set to IMAGE, VIDEO, or DOCUMENT.
  "example": {
    "header_handle": ["<HEADER_HANDLE>"]
  }
}
```

#### BODY :

```json
{
  "type": "BODY",
  "text": "<TEXT>",

  # Required if <TEXT> string contains variables
  "example": {
    "body_text": [
      [
        <BODY_TEXT>
      ]
    ]
  }
}
```

#### FOOTER :

```json
{
  "type": "FOOTER",
  "text": "<TEXT>" // 60 characters maximum.
}
```

#### Buttons :

> read more : [Buttons](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/components#buttons)

```json
{
  "type": "BUTTONS",
  "buttons": [
    {
      "type": "PHONE_NUMBER",
      "text": "Call",
      "phone_number": "15550051310"
    },
    {
      "type": "URL",
      "text": "Shop Now",
      "url": "https://www.luckyshrub.com/shop/"
    }
  ]
}
```

### create a whatsapp business template

example template for : otp

```json
{
  "name": "OTP",
  "category": "AUTHENTICATION",
  "language": "en_US",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "OTP",
      "example": {
        "header_text": ["OTP"]
      }
    },
    {
      "type": "BODY",
      "text": "Your OTP is {{1}}",
      "example": {
        "body_text": [["8976"]]
      }
    },
    {
      "type": "FOOTER",
      "text": "OTP"
    }
  ]
}
```
