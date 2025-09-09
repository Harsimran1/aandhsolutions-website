---
title: "JWTs as Email Verification Tokens"
description: ""
publishedAt: "2018-09-13"
updatedAt: "2021-06-14"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "security"
  - "jwt"
  - "email"
  - "verification"  
draft: false
---

### Email verification is one of the basic things most websites use to make sure that the users that registers with them are real. The user is normally asked to click a link sent on his email. When the user clicks the link, the server recognises the user based on the information passed in link and marks it as verified. There are many ways to do so, two major of them being:

1. Generate a unique code specific to user and save it in your database corresponding to that user. Send the code in the email link sent to user. When the email is clicked, recognise the user based on the code in link and mark it as verified. Secure, but requires persistent storage. 
2. Encode the userId, email, link expiry information and cryptographically sign it by server. Requires no persistence, fairly secure.

JWTs happen to be perfect way to achieve the second option.

#### **Advantages**1. Widely available libraries in every language.
2. Out of box integrity protection.

#### Code SampleIf you already use JWTs for* *`Authorization `tokens, it is easy to reimplement it for emails. I have used `go` to achieve this.

The given code pretty much wraps the token generation and verification. The subject and email returned from `Verify` function can be used to mark the user as validated in database. The JWT generated looks something like this:

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJleHAiOjE1MzczNzI2ODcsImlhdCI6MTUzNzM1NzY4NywibmJmIjoxNTM3MzU3Njg3LCJzdWIiOiIzODM0MTUzMC02ODg0LTRiMTAtYjFhMy00NGRlN2YxNGQ2YzkifQ.gomG2SgLvxNJxTpgCfccyc_2Ft3VJOe5TUFLWUiydlq46ZOQI6KmSoQrFMYEiADfDYqpWs50ui41OUPhOEU5TcH2k_JqVHOnH1MiPJXqB7wydFVxEFkHnlRQvdRYoov4JXdYBUIL7-NUQ4RGyJ8poPS0zrTU-7jCYHgkTxvj4NpvxL2b1j7gQcmQNpZlmo1QrB9ZDHafdFuIQGxnsWxlrK8LW8BbuME-URQx4okHNYCp3FDc7ZbQI0xtBpYK58OzrMFx0vfqCKV_qpvv5OONiw6K61dyDifz4Co0uc4n-BpiGIuih1aIjobpz6k4mocYbEqLu9wSalbiRo36bl2Ojw`

You can use [https://jwt.io](https://jwt.io) to decode and check the content.

**Disadvantages**

JWT tokens are usually large. In plaintext emails , it can look ugly. It can be avoided by wrapping the email link with html button.
